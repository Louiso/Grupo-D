import React from 'react';

export default class Login extends React.Component{
  render(){
    return(
      <form className='white'>

        <div className='mdl-grid'>
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" ref='username' type="text" id="username"/>
              <label className="mdl-textfield__label" htmlFor="username">Username</label>
            </div>
          </div>
        </div>
        <div className='mdl-grid'>
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" ref='username' type="text" id="password"/>
              <label className="mdl-textfield__label" htmlFor="password">Password</label>
            </div>
          </div>
        </div>
        <div className='mdl-grid'>
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" ref='email' type="text" id="email"/>
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
          </div>
        </div>
        <div className='mdl-grid'>

          <div className="mdl-cell mdl-cell--12-col">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Registrar
            </button>
          </div>
        </div>
      </form>
    );
  }
}
