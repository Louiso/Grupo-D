import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import Login from '../imports/ui/Login.jsx';
import Home from '../imports/ui/Home.jsx';
import Registro from '../imports/ui/Registro.jsx';

FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
      content:(<Home/>)
    });
  }
});
FlowRouter.route('/Login',{
  action(){
    mount(MainLayout,{
      content:(<Login/>)
    });
  }
});
FlowRouter.route('/Registro',{
  action(){
    mount(MainLayout,{
      content:(<Registro/>)
    });
  }
});
