import { Router, Link, route } from 'preact-router';
import { signal } from "@preact/signals";
import { auth, onAuthStateChanged } from '../init/auth'
import PostMessage from '../init/window-message'

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Login from '../routes/login';
import SignOut from '../routes/signout';

const currentUser = signal();
/**
* If undefined => is still loading
* If null => no user is available
* Otherwise user is logged-in
*/
window.onload = () => {
	onAuthStateChanged(auth, user => {
		currentUser.value = user
		PostMessage.send('auth', JSON.stringify(auth))
		if (user === null) route('/login')
	})
}

const App = () => {
	return <div id="app">
		<Link href="/">home</Link> {" "}
		<Link href="/login" >login</Link>{" "}
		<Link href="/signout">out</Link>{" "}
		<main>
			<Router onChange={console.info}>
				<Home path="/" user={currentUser.value} />
				<SignOut path="/signout" user={currentUser.value} />
				<Login path="/login" redirectUrl='/' user={currentUser.value} />
			</Router>
		</main>
	</div>
}

export default App;
