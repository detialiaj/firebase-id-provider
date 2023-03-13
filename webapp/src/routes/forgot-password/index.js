import { useRef } from 'preact/hooks'
import { Link } from 'preact-router'
import Helmet from 'preact-helmet'
import PostMessage from '../../init/window-message';

const ForgotPass = ({ user }) => {
	const email = useRef(null)

	const handleSubmit = e => {
		e.preventDefault()
		PostMessage.send('resetPassword', email.current.value)
	}

	if (user === null) return <>
		<Helmet title="Hello | Reset password" />
		<section className="verticalspace55">
			<h4 className="card-title mb-4 mt-1 text-center">
				Request reset link
			</h4>
			<form className="mb-4" onSubmit={handleSubmit}>
				<div className="form-group">
					<input ref={email} className="form-control loginEmail"
						name=""
						placeholder="Your email"
						type="email"
						// required
						pattern="^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$" />
				</div>
				<button className="btn btn-primary btn-block snipcss0-2-3-11" type="submit">
					Send request
				</button>
			</form>
			<p className="text-center">
				<Link href="/login"><h1 style={{ display: "inline" }}>←</h1> Back to login</Link>
			</p>

		</section>
	</>;
	return <></>
};

export default ForgotPass;
