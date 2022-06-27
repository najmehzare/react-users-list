import React , { Component } from 'react';

import Header from './Admin/Layouts/header';

import authContext from '../Contexts/authContext';

//import routers
import Users from '../Routes/users';
import About from '../Routes/about';
import { Routes , Route } from 'react-router-dom';
import Contact from '../Routes/contact';
import Articles from '../Routes/Articles';
import SingleArticle from '../Routes/Articles/singleArticle';


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
                    <Routes>
                        <Route path='/' element={ <Users />} />
                        <Route path='/aboutUs' element={ <About />} />
                        <Route path='/contactUs' element={ <Contact />} />
                        <Route path='/articles' element={ <Articles />} />
                        <Route path='/articles/:id' element={ <SingleArticle />} />
                    </Routes>
                </div> 
            </authContext.Provider>
                       
            </>
        )
    }
}


export default App;