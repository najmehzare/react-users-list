import React from "react";
import { Outlet  , Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

 
function Contact(){
   
    return (

        <Card className="mt-6 w-fit items-center m-auto">

            <CardBody className="text-center" >
                <div className="p-3 text-green-700 ">
                    
                    <div className="text-start">
                            <Link to={`/contactUs/manager`} >تماس با مدیریت</Link>
                    </div>

                    <div className="text-start">
                        <Link to={`/contactUs/`} >فرم تماس</Link>
                    </div>
                    
                    <hr className="p-2"/>
                </div>
                    
                
                    <Outlet /> 
                
            </CardBody>
        
        </Card>
        
      );

}


export default Contact;