import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Object from './Object';
import Todo from './TodoList/Todo';
import Form from './Form/Form';
import Api from './ApiJoke/Api';

function App() {
    let url = "https://official-joke-api.appspot.com/random_joke";
    let newJokesFunc = ()=>{
        
    }
 return(
  <>
  {/* <Object/> */}
  {/* <Todo/> */}
  {/* <Form/> */}
  <Api/>
  </>
 );

}

export default App
