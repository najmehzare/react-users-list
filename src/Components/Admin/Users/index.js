import React , {useState , useEffect} from 'react';
import { Button } from "@material-tailwind/react";
import axios from 'axios';

//import Components
import Modal from "../../Modal/modal";
import UsersList from './usersList';
import AddUser from './addUser';
import EditUser from './editUser';

//import contexts
import UsersListContext from '../../../Contexts/usersListContext';


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

     // fetch data from api
    useEffect(()=>{
        fetchAllUserHandler()
    },[]);

    let fetchAllUserHandler = () =>{
        axios.get(`https://62938cc54e324aacf6dc89d4.endapi.io/users`)
        .then(response => {
            setUsersList({ users : response.data.data });
        })
        .catch(err => console.log(err));
    }
    function addUser(user) {
        console.log( user)
        axios.post(`https://62938cc54e324aacf6dc89d4.endapi.io/users`,user)
            .then(response => {
                setUsersList({
                    users : [
                        ...usersList.users,
                        response.data.data
                    ]       
                });
            })
            .catch(err => console.log(err));
    }


    function deleteUser(id) {
        axios.delete(`https://62938cc54e324aacf6dc89d4.endapi.io/users/${id}`)
        .then(response => {
            setUsersList({
                users : usersList.users.filter(item => item.id !== id)
            })
        })
        .catch(err => console.log(err));
    }

    function saveUser(user) {
        let userItem = usersList.users;
        let item = user;
        let userId = user.id;
        let newUsers = userItem.filter(item => item.id !== userId)
        
        axios.put(`https://62938cc54e324aacf6dc89d4.endapi.io/users/${userId}`,item)
        .then(response => {
            setUsersList({
                users : [
                    ...newUsers,
                    item
                ]       
            })
        })
        .catch(err => console.log(err));
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

            <UsersListContext.Provider value={{
                users : usersList.users,
                delete : {deleteUser} , 
                edit : {editUser}
            }}>
                <UsersList 
                    delete={deleteUser}
                    edit={editUser}
                />
            </UsersListContext.Provider>
            
        </>
       
    )
}


export default Index;