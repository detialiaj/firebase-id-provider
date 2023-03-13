import style from './style.css';
import Helmet from "preact-helmet";
import { route, Link } from 'preact-router'
import { Suspense } from 'preact/compat'

const Home = ({ user }) => {
	return (<>
		<Helmet title="Hello ID" />
		<section>
			<h3>Continue as:</h3>
			<p>
				{user? user.email: ". . ."}
			</p>
			<Link href="/signout" style={{ textDecoration: "underline", color: 'purple' }}>Try different user</Link>
			{" or "}
			<button onClick={() => route('/login')}>Continue</button>
		</section>
	</>
	);
};

export default Home;
