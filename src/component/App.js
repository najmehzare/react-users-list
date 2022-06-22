import React , { Component } from 'react';
import MyModal from './Modal/MyModal';

class App extends Component {

    render() {
        return (
            <>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <MyModal />
            </>
        )
    }
}


export default App;
