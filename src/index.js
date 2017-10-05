import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Todo from './Component/Todo';
import Counter from './Component/Counter';
import Reducer from './Reducer/index';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);

const root = document.getElementById('root');

const render = () => ReactDOM.render(
  <div>
    <div className="row">
        <Counter  myStore={store}
                  value={store.getState()}    
                  onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                  onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
    </div>
    <hr />
    <div className="row">
      <Todo myStore={store}
            onHandleClick={(val) => { store.dispatch({type:"ADD_TODO",todo:{text:val}}) } } /> 
    </div>
  </div>,root)

render();
store.subscribe(render);


registerServiceWorker();
