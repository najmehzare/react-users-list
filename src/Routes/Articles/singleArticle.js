import React from "react";
import { useState , useEffect } from "react";
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
 
import { useParams } from 'react-router-dom';
import LoadingModal from  "../../Components/Modal/loading";
import articleApi from '../../Api/articlesApi';

function SingleArticle(){

    const params = useParams();

    const [article , setArticle] = useState (null);
    const [showLoading , setShowLoading] = useState (false);
   
    useEffect(()=>{
        fetchArticleHandler();
    },[]);

    // fetch data from api
    let fetchArticleHandler = async () => {
        setShowLoading(true);
        await articleApi.get(`/${params.id}`)
        .then(res => {
            setArticle(res.data.data)
            setShowLoading(false)
        }).catch(err => console.log(err))
    };

    return (

        <>
            <Card className="mt-6 w-3/4 items-center m-auto">

                <CardBody className="text-start">
                    {
                        ! article ? <p>'مقاله ای وجود ندارد'</p>
                        :
                        <div>
                            <Typography variant="h5" className="mb-2">
                                {article.title!==null ? article.title : ''}
                            </Typography>
                            <Typography variant="h6" className="mb-2 p-2 text-sm text-green-800">
                                نویسنده : {article.auter}
                                تاریخ ایجاد : {article.create_date}
                            </Typography>
                            <Typography>
                                {article.body}
                            </Typography>
                        </div>
                    }
                                        

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


export default SingleArticle;