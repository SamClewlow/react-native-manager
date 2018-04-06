import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'; 
import Router from './Router';

class App extends Component {

componentWillMount() {
    const config = {
        apiKey: 'AIzaSyAZ4YIQmLtSmSUOVM0QQ3kfP0QgSthLfH8',
        authDomain: 'manager-d912e.firebaseapp.com',
        databaseURL: 'https://manager-d912e.firebaseio.com',
        projectId: 'manager-d912e',
        storageBucket: 'manager-d912e.appspot.com',
        messagingSenderId: '89539012009'
      };
      firebase.initializeApp(config);
}

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
