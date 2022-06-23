import React , { Component } from 'react';

import Header from './Admin/Layouts/header';
import Index from './Admin/Users';

class App extends Component {

    render() {
        return (
            <>
             <Header />
             <Index />
            </>
        )
    }
}


export default App;
