import React from 'react';
import { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/asset/css/custom.css';

import {BrowserRouter} from 'react-router-dom';
import AppRoute from './router/AppRoute';




function App() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}
export default App;
