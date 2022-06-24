import React , {useState} from 'react';
import { Button } from "@material-tailwind/react";
import Modal from "../../Modal/modal";
import UsersList from './usersList';
import AddUser from './addUser';
import EditUser from './editUser';

function Index() {
    const [showModal, setShowModal] = useState(false);
    const [usersList, setUsersList] = useState({
        users : [
            {id : 1 , name : 'Sara' , family : 'zare' , email : 'sara@gmail.com' , isAdmin: 1 , membershipDate :'date' },
            {id : 2 , name : 'Ali' , family : 'bahrami', email : 'ali@gmail.com' , isAdmin: 0 , membershipDate :'date' },
        ]               
    })
    const [targetUser, setTargetUser] = useState({});
    const [showEditModal, setShowEditModal] = useState(false);

    function addUser(user) {
        setUsersList({
            users : [
                ...usersList.users,
                user
            ]       
        })
    }

    function deleteUser(id) {
        setUsersList({
            users : usersList.users.filter(item => item.id !== id)
        })
    }

    function saveUser(user) {
        let userItem = usersList.users;
        let item = user;
        let newUsers = userItem.filter(item => item.id !== user.id)

        setUsersList({
            users : [
                ...newUsers,
                item
            ]       
        })
    }
    
    function editUser(id) {
        setTargetUser(usersList.users.find(item => item.id === id));
        setShowEditModal(true);
    }
    
    return (
        <>
            {/* Modal add user */}
            <Modal showModal={showModal}  setShowModal={setShowModal}>
                <AddUser 
                    setShowModal={setShowModal} 
                    add={addUser}
                />
            </Modal>

            {/* Modal edit user */}
            <Modal showModal={showEditModal} setShowModal={setShowEditModal} >
                <EditUser    
                    setShowModal={setShowEditModal}            
                    edit={saveUser}
                    targetUser = {targetUser}
                />
            </Modal>
           
            
            <div className="inset-0 flex items-center justify-center">
                <Button onClick={() => { setShowModal(true) }}>
                     اضافه کردن کاربر جدید
                </Button>
            </div>

            <UsersList 
                users={usersList.users}
                delete={deleteUser}
                edit={editUser}
             />
        </>
       
    )
}


export default Index;