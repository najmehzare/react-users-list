import React from "react";

const UsersListContext = React.createContext({
    users : [],
    deleteUserHandler : () =>{},
    edit : () =>{}
});

export default UsersListContext;