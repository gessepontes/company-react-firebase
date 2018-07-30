import React from 'react';

import { auth } from './../../firebase-config'

const SignOutButton = () =>
  <a className='text-white' onClick={() => auth.signOut()}>Sair</a> 
export default SignOutButton;