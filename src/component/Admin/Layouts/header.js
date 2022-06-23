import React from 'react';
import { Navbar, Button, Typography } from "@material-tailwind/react";

function Header() {

    const icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 opacity-75"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
     
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