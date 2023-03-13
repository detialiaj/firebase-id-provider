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
		// user && route(redirectUrl, true)
	}, [user])


	if (user === null) return <>
		<Helmet title="Hello | Login" />
		<section>
			<article className="card-body snipcss0-0-0-1 snipcss-VloaE verticalspace55">
				<h4 className="card-title mb-4 mt-1 text-center snipcss0-1-1-2">
					HelloAlbania - Login
				</h4>
				<form className="loginForm snipcss0-1-1-3" onSubmit={handleSubmit}>
					<div className="form-group snipcss0-2-3-4">
						<label className="snipcss0-3-4-5">
							Your email
						</label>
						<input ref={email} className="form-control loginEmail snipcss0-3-4-6" name="" placeholder="Email" type="email" pattern="^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$" required="" />
					</div>
					<div className="form-group snipcss0-2-3-7">
						<label className="snipcss0-3-7-8">
							Your password
						</label>
						<input ref={password} className="form-control password snipcss0-3-7-9" placeholder="******" type="password" required="" />
						<a className="float-right mb-3 snipcss0-3-7-10" href="#forgotPasswordModal" data-toggle="modal" data-target="#forgotPasswordModal">
							Forgot?
						</a>
					</div>
					<button className="btn btn-primary btn-block snipcss0-2-3-11" type="submit">
						Login
					</button>
				</form>
			</article>

		</section>
	</>;
	return <></>
};

export default Login;
