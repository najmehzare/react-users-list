import React from "react";

const UsersListContext = React.createContext({
    users : [],
    deleteUser : () =>{},
    editUser : () =>{}
});

export default UsersListContext;