import React , {useContext } from 'react';
import { Navbar, Button, Typography } from "@material-tailwind/react";

import AuthContext from '../../../Contexts/authContext';

function Header() {

  const authContext = useContext(AuthContext);

    let dologin = () => authContext.login();
    let dologout = () =>authContext.logout();

      return (
        <Navbar className="mx-auto max-w-screen-xl bg-blue-100 ">
          <div className="container flex items-center justify-between text-blue-grey-900">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="mr-4 cursor-pointer py-1.5 font-normal"
            >
              مدیریت
            </Typography>
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