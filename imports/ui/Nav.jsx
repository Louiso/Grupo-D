import React from 'react';

export default class Login extends React.Component{
  onClickLogin(event){
    event.preventDefault();
    FlowRouter.go('/Login');
  }
  onClickRegistro(event){
    event.preventDefault();
    FlowRouter.go('/Registro');
  }
  render(){
    return(
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" onClick={this.onClickLogin.bind(this)}>Login</a>
        <a className="mdl-navigation__link" onClick={this.onClickRegistro.bind(this)}>Registro</a>
      </nav>
    );
  }
}
