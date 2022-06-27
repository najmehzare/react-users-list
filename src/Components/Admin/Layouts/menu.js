import React from 'react';
import { Typography } from "@material-tailwind/react";
import { NavLink , useLocation } from 'react-router-dom';


function Menu() {

  const location = useLocation();

      return (

            <ul className="flex items-center gap-6">
              <Typography as="li" variant="small" className="p-1 font-normal">
                <NavLink 
                  className="flex items-center" 
                  to="/" 
                  style={({ isActive }) => {
                    return {
                      color : isActive ? '#0891b2' : 'inherit'
                    }
                  }}
                >صفحه اصلی</NavLink>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <NavLink 
                  className="flex items-center" 
                  to={`/articles`+ location.search}
                  style={({ isActive }) => {
                    return {
                      color : isActive ? '#0891b2' : 'inherit'
                   }
                  }}
                >مقالات</NavLink>
              </Typography>

              <Typography as="li" variant="small" className="p-1 font-normal">
                <NavLink 
                  className="flex items-center" 
                  to="/aboutUs"
                  style={({ isActive }) => {
                    return {
                      color : isActive ? '#0891b2' : 'inherit'
                   }
                  }}                  
                  >درباره ما</NavLink>
              </Typography>
              <Typography as="li" variant="small" className="p-1 font-normal">
                <NavLink 
                  className="flex items-center" 
                  to={{
                  pathname : "/contactUs" ,
                  search : "?locat=yes",
                  hash : "#myPage"
                  }}
                  style={({ isActive }) => {
                    return {
                      color : isActive ? '#0891b2' : 'inherit'
                  }
                  }}
                >تماس با ما</NavLink>
              </Typography>             
            </ul>
            
           
      );
}


export default Menu;