import React from 'react';
import { Navbar, Button, Typography } from "@material-tailwind/react";

function Header() {

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
            
            <Button variant="gradient" size="sm">
              کاربران
            </Button>
          </div>
        </Navbar>
      );
}


export default Header;