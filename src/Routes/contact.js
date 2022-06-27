import React from "react";
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
 
function Contact(){
   
    return (

        <Card className="mt-6 w-3/4 items-center m-auto">

            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    تماس با ما
                </Typography>
                <Typography>
                    برنامه Reactjs 
                </Typography>
            </CardBody>
        
        </Card>
        
      );

}


export default Contact;