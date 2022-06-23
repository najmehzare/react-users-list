import React , {useState} from 'react';
import { Button } from "@material-tailwind/react";
import UsersList from './usersList';
import AddUser from './addUser';

function Index() {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    let [usersList, setUsersList] = useState({
        users : [
            {id : 1 , name : 'Sara' , family : 'zare' , email : 'sara@gmail.com' , isAdmin: 1 , membershipDate :'date' },
            {id : 2 , name : 'Ali' , family : 'bahrami', email : 'ali@gmail.com' , isAdmin: 0 , membershipDate :'date' },
        ]               
    })

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    function addTodo(user) {
        setUsersList({
            users : [
                ...usersList.users,
                user
            ]       
        })
    }

    
    return (
        <>
            <AddUser 
                modalIsOpen={modalIsOpen} 
                closeModal={closeModal}
                add={addTodo}
            />
            
            <div className="inset-0 flex items-center justify-center">
                <Button onClick={openModal}>
                     اضافه کردن کاربر جدید
                </Button>
            </div>

            <UsersList 
                users={usersList.users}
                // delete={this.deleteTodo.bind(this)}
                // edit={this.editTodo.bind(this)}
             />
        </>
       
    )
}


export default Index;