import React, { Component } from 'react';

import Input from '@salesforce/design-system-react/lib/components/input';
import Button from '@salesforce/design-system-react/lib/components/button';
import './Login.css';

class Login extends Component {
	render() {
		return (
			<div className="wrapper h-100">
				<form className="form slds-p-around_medium">
					<div className="slds-col--padded slds-m-bottom_small">
						<h1 className="slds-text-heading_large slds-text-align_center">
							<b>Bid Win</b>
						</h1>
					</div>
					<div className="slds-box  slds-theme_default">
						<div className="slds-col--padded slds-m-top_small">
							<Input type="text" label="User Name" placeholder="Your Name" required />
						</div>
						<div className="slds-col--padded slds-m-top_small">
							<Input className type="password" label="Password" placeholder="Password" required />
						</div>
						<div className="slds-col--padded slds-m-top_large slds-m-bottom_small slds-clearfix">
							<div class="slds-float_right">
								<Button className="slds-button slds-m-right_small" label="SignUp" />
								<Button className="slds-button slds-button_brand" label="Login" variant="Login" />
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
