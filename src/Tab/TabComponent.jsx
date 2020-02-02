import React from 'react';
import { Nav, Tab } from 'react-bootstrap';

import './TabComponent.css';

import RegisterForm from '../Form/RegisterForm';
import LoginForm from '../Form/LoginForm';

const LOGIN = 'login';
const REGISTER = 'register';

const TabComponent = () => (
  <div className="TabComponent">
    <Tab.Container defaultActiveKey={LOGIN}>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link eventKey={LOGIN}>J'ai un compte</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={REGISTER}>Je n'ai pas de compte</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey={LOGIN}>
          <LoginForm />
        </Tab.Pane>
        <Tab.Pane eventKey={REGISTER}>
          <RegisterForm />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
);

export default TabComponent;
