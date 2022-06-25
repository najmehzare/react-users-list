import React , { Component } from 'react';

import Header from './Admin/Layouts/header';
import Index from './Admin/Users';

import authContext from '../Contexts/authContext';

class App extends Component {

    state = {
        authenticated : false
    }
    render() {
        return (
            <>
            <authContext.Provider value={{
                authenticated : this.state.authenticated, 
                login : () => { this.setState({ authenticated : true})},
                logout : () => { this.setState({ authenticated : false})}
            }}
            >
                 <div>
                    <Header />
                    <Index />
                </div> 
            </authContext.Provider>
                       
            </>
        )
    }
}


export default App;