import { useEffect, useState } from "react";

export default function Api(){
    let url = "https://official-joke-api.appspot.com/random_joke";
    let newJokesFunc = async()=>{
        let joke = await fetch(url);
        let responce = await joke.json();
        newJokes({setup : responce.setup , punchline : responce.punchline});
    }

    useEffect(()=>{
      async  function  jokesNew (){
        let joke = await fetch(url);
        let responce = await joke.json();
        newJokes({setup : responce.setup , punchline : responce.punchline});
        }
        jokesNew();
    },[])

    const [jokes , newJokes]= useState({});
    return(
        <>
        <h1>Jokes 🤣</h1>
        <p>{jokes.setup}</p>
        <p>{jokes.punchline}</p>
        <button onClick={newJokesFunc}>New Joke</button>
        </>
    );
}