import React from "react";
import { useState , useEffect } from "react";
import {Link} from 'react-router-dom';
import LoadingModal from  "../../Components/Modal/loading";
import articleApi from '../../Api/articlesApi';

import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


function Articles(){
   
    const [articlesList , setArticlesList] = useState (null);
    const [showLoading , setShowLoading] = useState (false);

    useEffect(()=>{
        setShowLoading(true);
        articleApi.get('/')
        .then(res => {
            setArticlesList(res.data.data)
            setShowLoading(false)
        }).catch(err => console.log(err))
    },[]);

    return (
        <>
            <Card className="mt-6 w-3/4 items-center m-auto">

                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        لیست مقالات
                    </Typography>
                    <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        
                        {   
                        ! articlesList
                            ? <p>there isn`t any articles</p>
                            : articlesList.map((item,index) => 
                            <li  key={index} className="px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 text-start"> 
                                
                                <Link className="flex items-center" 
                                        to={`/articles/${item.id}`}
                                    >
                                    {index+1} -{item.title}
                                    <p className="text-sm">
                                        (نویسنده : {item.auter} / {item.create_date})
                                    </p>
                                </Link>
                                
                            </li>
                            )
                        }

                    </ul>               
                </CardBody>

                </Card>

            {/*Add loading Component*/}
            <LoadingModal
                showLoading={showLoading}
                setShowLoading={setShowLoading}
            />
        </>
        
        
      );

}


export default Articles;