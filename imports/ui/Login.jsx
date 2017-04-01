import React, {PropTypes} from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
    recuperarContraseña(){
      FlowRouter.go('/RecuperarContraseña');
    }
    handleSubmit(event) {
        event.preventDefault();
        const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        if (username != '' && password != '') {
            Meteor.loginWithPassword(username, password);
            FlowRouter.go('/');
        } else {
            this.props.mensaje = 'Es Obligatorio llenar todos los campos';
        }
    }
    changeRegister() {
        FlowRouter.go('/Registro');
    }
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Username" ref='username' id="username" type="text" className="validate"/>
                            <label htmlFor="username">First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" ref='password' type="password" className="validate"/>
                              <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" ref='email' type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col s6">
                        <button className="btn waves-effect waves-light" type="submit">Login
                           <i className="material-icons right">send</i>
                         </button>
                      </div>
                       <div className="col s6">
                         <a className='linkRecuperarContraseña right' onClick={this.recuperarContraseña.bind(this)}>recuperar contraseña</a>
                       </div>
                    </div>
                </form>
            </div>
        );
    }
}

Login.defaultProps = {
    mensaje: ''
}

Login.propTypes = {
    mensaje: PropTypes.string
}
