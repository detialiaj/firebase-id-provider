import Helmet from 'preact-helmet'
import { useEffect } from 'preact/hooks';
import { auth, signOut } from '../../init/auth'

const SignOut = ({ user }) => {
	useEffect(async () => {
		if (!user) return
		try {
			await signOut(auth)
		} catch (err) {
			console.error(err)
		}
	}, [user])
	return (
		<>
			<Helmet title="Hello | Sign out" />
		</>
	);
};

export default SignOut;
