import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
 
const DO_NOT_LOGIN = false;
 
runWithAdal(authContext, () => {
 
  // eslint-disable-next-line
  require('./index.js');
 
},DO_NOT_LOGIN);