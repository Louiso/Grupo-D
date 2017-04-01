import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import Login from '../imports/ui/Login.jsx';
import Home from '../imports/ui/Home.jsx';
import Registro from '../imports/ui/Registro.jsx';
import { layoutCuenta } from './layouts/layoutCuenta.jsx';
import RecuperarContraseña from '../imports/ui/RecuperarContraseña.jsx';

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

FlowRouter.route('/RecuperarContraseña',{
  action(){
    mount(MainLayout,{
      content:(<RecuperarContraseña/>)
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
FlowRouter.route('/:id',{
  action(){
    mount(layoutCuenta,{
      content:(<Home/>)
    });
  }
});
