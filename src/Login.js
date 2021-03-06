import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
	const [state, dispatch] = useStateValue()
	const signIn = () => {
		// e.preventDefault()
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				})
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
					alt=""
				/>
				<h1>SIGN IN TO INSPIRED COMMUNITY</h1>
				<p>inspiredcommunity.slack.com</p>
				<Button onClick={signIn}>Sign In With Google</Button>
			</div>
		</div>
	);
}

export default Login;
