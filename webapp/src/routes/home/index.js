import style from './style.css';
import Helmet from "preact-helmet";
import { route, Link } from 'preact-router'

const Home = ({ user }) => {
	return (<>
		<Helmet title="Hello ID" />
		<section>
			<h3>Continue as:</h3>
			<p>
				Email | {user?.email}
			</p>
			<p>
				Name | {user?.displayName ?? '—'}
			</p>
			<Link href="/signout">Try different user</Link>
			{" or "}
			<button onClick={() => route('/login')}>Continue</button>
		</section>
	</>
	);
};

export default Home;
