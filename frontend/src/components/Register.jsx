import { Cancel, Room } from "@material-ui/icons";
import { useRef, useState } from "react";
import axios from "axios";
import "./register.css";

const Register = ({ setShowRegister }) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const nameRef = useRef();
	const surnameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			username: nameRef.current.value,
			surname: surnameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};

		try {
			await axios.post("/users/register", newUser);
			setError(false);
			setSuccess(true);
		} catch (err) {
			setError(true);
			setSuccess(false);
		}
	};

	return (
		<div className="registerContainer">
			<div className="logo">
				<Room />
				FRENTPRICE
			</div>
			<form onSubmit={handleSubmit}>
				<input className="mt-2" type="text" placeholder="name" ref={nameRef} />
				<input className="mt-2" type="text" placeholder="surname" ref={surnameRef} />
				<input className="mt-2" type="email" placeholder="email" ref={emailRef} />
				<input className="mt-2" type="password" placeholder="password" ref={passwordRef} />
				<button className="registerBtn mt-3">Register</button>
				{success && (
					<span className="success">Kayıt Oldunuz!</span>
				)}
				{error && <span className="failure">Hata oluştu!</span>}
			</form>
			<Cancel
				className="registerCancel"
				onClick={() => setShowRegister(false)}
			/>
		</div>
	);
};

export default Register;
