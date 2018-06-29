import React, { Component } from 'react';
import {
  Container,
  Content,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button
} from 'rsuite';
import { Navigation } from './Header';

const h_600 = {
  height: '600px'
};

export class Login extends Component {

  login = () => {
    
  }

  render() {
    return (
      <div className="show-fake-browser login-page">
        <Container>
          <Navigation />
          <Content>
            <FlexboxGrid style={h_600} justify="center" align="middle">
              <FlexboxGrid.Item colspan={6}>
                <Panel header={<h3>Login</h3>} bordered>
                  <Form align="left" fluid>
                    <FormGroup>
                      <ControlLabel>Username or email address</ControlLabel>
                      <FormControl name="name" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <FormControl name="password" type="password" />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={this.login()}>
                          Sign in
                        </Button>
                        <Button appearance="link">Forgot password?</Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    );
  }
}
