import React , {useState , useEffect , useContext} from 'react';
import { Button } from "@material-tailwind/react";
import usersApi from '../../../Api/usersApi';

//import Components
import Modal from "../../Modal/modal";
import LoadingModal from  "../../Modal/loading";
import UsersList from './usersList';
import AddUser from './addUser';
import EditUser from './editUser';

//import contexts
import UsersListContext from '../../../Contexts/usersListContext';
import AuthContext from '../../../Contexts/authContext';


function Index() {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const authContext = useContext(AuthContext);
    const [usersList, setUsersList] = useState({
        users : [
            {id : 1 , name : 'Sara' , family : 'zare' , email : 'sara@gmail.com' , isAdmin: 1 , membershipDate :'date' },
            {id : 2 , name : 'Ali' , family : 'bahrami', email : 'ali@gmail.com' , isAdmin: 0 , membershipDate :'date' },
        ]               
    })
    const [targetUser, setTargetUser] = useState({});
   

     // fetch data from api
    useEffect(()=>{
        fetchAllUserHandler()
    },[]);

    let fetchAllUserHandler = () =>{
        usersApi.get()
        .then(response => {
            setUsersList({ users : response.data.data });
            setShowLoading(false)
        })
        .catch(err => console.log(err));
    }


    function addUser(user) {
        setShowLoading(true)

        usersApi.post(`/`,user)
            .then(response => {
                setUsersList({
                    users : [
                        ...usersList.users,
                        response.data.data
                    ]       
                });
                setShowLoading(false)
            })
            .catch(err => console.log(err));
    }


    function deleteUser(id) {
        setShowLoading(true)

        usersApi.delete(`/${id}`)
        .then(response => {
            setUsersList({
                users : usersList.users.filter(item => item.id !== id)
            })
            setShowLoading(false)
        })
        .catch(err => console.log(err));
    }

    function saveUser(user) {
        let userItem = usersList.users;
        let item = user;
        let userId = user.id;
        let newUsers = userItem.filter(item => item.id !== userId)
        
        setShowLoading(true)

        usersApi.put(`/${userId}`,item)
        .then(response => {
            setUsersList({
                users : [
                    ...newUsers,
                    item
                ]       
            })
            setShowLoading(false)
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
            {
                authContext.authenticated
                ? (
                    
                        <Button onClick={() => { setShowModal(true) }}>
                            اضافه کردن کاربر جدید
                        </Button>
                   
                )
                : <p>You must be login</p>
            }
            </div>

            <UsersListContext.Provider value={{
                users : usersList.users,
                deleteUser , 
                editUser 
            }}>
                <UsersList 
                    // delete={deleteUser}
                    // edit={editUser}
                />
            </UsersListContext.Provider>
            
             {/*Add loading Component*/}
             <LoadingModal
                showLoading={showLoading}
                setShowLoading={setShowLoading}
            />
        </>
       
    )
}


export default Index;