import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class Home extends React.Component{
  // constructor(props){
  //   super(props);
  //   // Tracker.autorun(()=>{
  //   //   Meteor.subscribe('userData');
  //   // });
  //   // Session.set('usuario','userData');
  //     // <span>{Session.get('usuario').username}</span>
  // }
  render(){
    return(
      <div className="row">
        <ul>
          <li>Nombre</li>
          <li>Salir</li>
        </ul>
      </div>
    );
  }
}
