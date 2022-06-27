import React , {useContext } from 'react';
import { Navbar, Button, Typography } from "@material-tailwind/react";

import AuthContext from '../../../Contexts/authContext';
import Menu from './menu';

function Header() {

  const authContext = useContext(AuthContext);

    let dologin = () => authContext.login();
    let dologout = () =>authContext.logout();

      return (
        <Navbar className="mx-auto max-w-screen-xl bg-blue-100 ">
          <div className="container flex items-center justify-between text-blue-grey-900">
            
            <Typography variant="h6" color="blue-grey" textGradient
            className="mr-4 cursor-pointer py-1.5 font-bold ">
             React Project
            </Typography>

            <Menu />
          
            { 
              ! authContext.authenticated
                ? <Button variant="gradient" color="green" size="sm" onClick={dologin}>login</Button>
                : <Button variant="gradient" color="orange" size="sm" onClick={dologout}>logout</Button>
            }
           
          </div>
        </Navbar>
      );
}


export default Header;