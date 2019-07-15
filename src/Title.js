import React, {useState, useEffect} from 'react';
import './Title.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: "AIzaSyAYlgczDK50RklY_Q6ul7T5uijb3P1GUfo",
	authDomain: "apluslecture.firebaseapp.com",
	databaseURL: "https://apluslecture.firebaseio.com",
	projectId: "apluslecture",
	storageBucket: "apluslecture.appspot.com",
	messagingSenderId: "619932795421",
	appId: "1:619932795421:web:974c08f9fa5f4d57"
};

firebase.initializeApp(firebaseConfig);

function Title() {
	const db = firebase.firestore();

	const [modalStyle, setModalStyle] = useState({
		opacity: '0'
	});

	const [modalMessageColor, setModalMessageColor] = useState({
	});

	const [modalOn, setModalOn] = useState(false);

	const [modalMessage, setModalMessage] = useState("");

	const handleSubmit = (e) => {
		var re = new RegExp(String.raw`(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`);
		e.preventDefault();
		const email = e.nativeEvent.srcElement[0].value;
		if (re.exec(email) !== null) {
			e.nativeEvent.srcElement[0].value = "";
			db.collection("emailsFromLandingPage").doc().set({
				email: email
			});
			setModalMessage("Thank you for subscribing. We will make sure to email you updates.");
			setModalMessageColor({color: "green"})
		} else {
			setModalMessage("Email is invalid. Please make sure the email is in proper format.");
			setModalMessageColor({color: "red"});
		}
		setModalStyle({opacity: '1'});
		setModalOn(true);
	}

	const handleCloseModal = () => {
		setModalStyle({opacity: '0'});
		setModalOn(false);
	}

	useEffect(() => {
		if (modalOn) {
			const root = document.getElementById("root");
			root.style.background = "rgba(30, 30, 30, 0.2)";
		}
	});

	return (
		<div>
			<div className="modal-message" style={modalStyle}>
				<div style={modalMessageColor}>{modalMessage}</div>
				<button className="btn-close" onClick={handleCloseModal}>close</button>
			</div>
			<h1 className="title">A Plus Lecture</h1>
			<h2 className="sub-title">Superstar Tutors At Your Fingertips</h2>
			<form onSubmit={handleSubmit} >
				<input name="email" className="email-sign-up" type="text" placeholder="email"></input>
				<input className="submit-button" type="submit" value="find out more"></input>
			</form>
		</div>
	);
}

export default Title;