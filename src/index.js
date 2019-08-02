import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/Todo';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
//import App from './components/app/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware()(createStore)(devTools);

ReactDOM.render(
    <Provider store={store}>       
        <Todo url={"https://picsum.photos/200/300/"} title={"Titulo teste"}
            project={"Projeto default"} createdAt={"07/02/2019"}
			done={false}  id={"666"}
            />
        <br/>        
    </Provider>
    , document.getElementById('root'));

serviceWorker.register();
