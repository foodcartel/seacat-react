import React from 'react';

class NavigationBar extends React.Component {
	render () {
		return (
		<div id="NavigationBar">
      <img className="logo-img" src="../assets/seacat-logo.png"/>
			<h1>Seacat</h1>
		</div>
		);
	}
}

module.exports = NavigationBar;
