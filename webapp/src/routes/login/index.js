import { useEffect, useRef } from 'preact/hooks'
import { route } from 'preact-router'
import Helmet from 'preact-helmet'
import { auth, signInWithEmailAndPassword } from '../../init/auth'
import { requestCustomToken } from '../../api/auth';
import PostMessage from '../../init/window-message';

const Login = ({ user, redirectUrl }) => {
	const email = useRef(null)
	const password = useRef(null)

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
		} catch (err) {
			alert(err.message)
			console.error(err)
		}
	}

	useEffect(async () => {
		if (!user) return;
		try {
			const response = await requestCustomToken(await user.getIdToken())
			const { data: { customToken } } = response;
			PostMessage.send('customToken', customToken);
		} catch (err) {
			console.error(err)
		}
		user && route(redirectUrl, true)
	}, [user])


	if (user === null) return <>
		<Helmet title="Hello | Login" />
		<section>
			<form onSubmit={handleSubmit}>
				<input ref={email} type="email" name="email" required />
				<input ref={password} type="password" name="password" required />
				<button>Login</button>
			</form>
		</section>
	</>;
	return <></>
};

export default Login;
