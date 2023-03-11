import { h } from 'preact';
import style from './style.css';
import Helmet from "preact-helmet";
const Home = ({ user }) => {
	console.log(user)
	return (<>
		<Helmet title="Hello ID" />
		<section>
			<p>
				Email | {user?.email}
			</p>
			<p>
				Name | {user?.displayName ?? '—'}
			</p>
		</section>
	</>
	);
};

export default Home;
