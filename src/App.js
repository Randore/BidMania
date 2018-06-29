import React, { Component } from 'react';
// import Login from './components/Login/Login';
// import BidMachine from './components/BidView/BidMachine';
import BidEditor from './components/Campaign/CreateNewBid'

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="h-100">
				<BidEditor />
			</div>
		);
	}
}

export default App;
