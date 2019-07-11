import React from 'react';
import './Title.css';

function Title() {
	return (
		<div className="title-container">
			<h1 className="title">A Plus Lecture</h1>
			<h2 className="sub-title">Superstar Tutors At Your Fingertips</h2>
			<form>
				<input className="email-sign-up" type="text" placeholder="email"></input>
				<input className="submit-button" type="submit" value="find out more"></input>
			</form>
		</div>
	);
}

export default Title;