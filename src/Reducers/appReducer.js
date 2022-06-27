
function AppReducer(state , action){

    switch (action.type) {
        case 'fetch_users':
            return fetchUsers(state , action);
        case 'add_user':
            return addUser(state , action);
        case 'delete_user':
            return deleteUser(state , action);
        default:
            return state;
    }
}

export default AppReducer;


let fetchUsers = (state , action) =>{
    let {data} = action.payload;
        return {
            users : data   
        }
}

let addUser = (state , action) =>{
    let {user} = action.payload;
        return {
            users : [
                ...state.users,
                user
            ]   
        }
}

let deleteUser = (state , action) =>{
    let {id} = action.payload;
    return {
        users : state.users.filter(item => item.id !== id)
    }
}
