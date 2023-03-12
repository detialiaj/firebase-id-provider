import style from './style.css';
import Helmet from "preact-helmet";
const Home = ({ user }) => {
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
