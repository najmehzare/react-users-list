import React from 'react';
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


import User from './user';

function UsersList(props) {

    const  {users} = props;
    
    return (
        <>
            <div className='grid justify-items-center '>
            <Card className="mt-6 w-4/6">
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                    لیست کاربران
                    </Typography>
                        <table className="text-right min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        ردیف
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        نام
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        نام خانوادگی
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        ایمیل
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        نوع
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        تاریخ عضویت
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">ویرایش</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {
                                users.length === 0
                                    ? <p>there isn`t any users</p>
                                    : users.map((item,index) => <User 
                                        key = {item.id}
                                        user={item} 
                                        index={index}
                                        deleteUserHandler={item.delete}
                                        editUserHandler={item.edit}
                                    />)
                                }
                            </tbody>
                        </table>                   
                </CardBody>
            </Card>
            </div>
        </>
    )
}


export default UsersList;