import React , { Component } from 'react';

import Header from './Admin/Layouts/header';

import authContext from '../Contexts/authContext';

//import routers
import Users from '../Routes/users';
import About from '../Routes/about';
import { Routes , Route } from 'react-router-dom';
import Contact from '../Routes/Contact/contact';
import ContactForm from '../Routes/Contact/contactForm';
import Articles from '../Routes/Articles';
import SingleArticle from '../Routes/Articles/singleArticle';
import ContactManager from '../Routes/Contact/contactManager';
import NotFound from '../Routes/notFound';



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
                        <Route path='/contactUs' element={ <Contact />} >
                            <Route path='' element={<ContactForm />} />
                            <Route path='manager' element={ <ContactManager />} />
                            
                        </Route>    
                        <Route path='/articles' element={ <Articles />} />
                        <Route path='/articles/:id' element={ <SingleArticle />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div> 
            </authContext.Provider>
                       
            </>
        )
    }
}


export default App;