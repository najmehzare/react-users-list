import React from "react";

const UsersListContext = React.createContext({
    users : [],
    delete : () =>{},
    edit : () =>{}
});

export default UsersListContext;