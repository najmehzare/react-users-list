
function AppReducer(state , action){
    console.log( action)

    switch (action.type) {

        case 'add_user':
            return addUser(state , action);
        case 'delete_user':
            return deleteUser(state , action);
        default:
            return state;
    }
}

export default AppReducer;

let addUser = (state , action) =>{
    let {user} = action.payload;
        // return {
        //     ...state ,
        //     users : [
        //         ...state.users,
        //         user
        //     ]   
        // }
}

let deleteUser = (state , action) =>{
    let {id} = action.payload;
    return {
        ...state ,
        users : [
            state.users.filter(item => item.id !== id)
        ]   
    }
}

let deleteUser2 = (state , action) =>{
    
}



// function deleteUser(id) {
//     setUsersList({
//         users : usersList.users.filter(item => item.id !== id)
//     })
// }

// function saveUser(user) {
//     let userItem = usersList.users;
//     let item = user;
//     let newUsers = userItem.filter(item => item.id !== user.id)

//     setUsersList({
//         users : [
//             ...newUsers,
//             item
//         ]       
//     })
// }

// function editUser(id) {
//     setTargetUser(usersList.users.find(item => item.id === id));
//     setShowEditModal(true);
// }