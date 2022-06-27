import React from "react";
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
 
function About(){
   
    return (

        <Card className="mt-6 w-3/4 items-center m-auto">

            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
            درباره ما
                </Typography>
                <Typography>
                برنامه Reactjs 
                </Typography>
            </CardBody>
        
        </Card>
        
      );

}


export default About;