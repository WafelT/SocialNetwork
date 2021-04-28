import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, addMessage, changeInputPostText} from './redux/state';
import './index.css'

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} changeInputPostText={changeInputPostText}/>
    </React.StrictMode>,
  document.getElementById('root')
  );
}