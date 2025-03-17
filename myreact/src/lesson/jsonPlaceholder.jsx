import React, { useEffect, useState } from 'react'
import loadingGif from '../img/loading.gif'

const JsonPlaceholder = () => {
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)

useEffect(()=>{
const fetchTodos = async()=>{
// first it will try the function
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
if(!response){
    console.log("Broken URL");
// it will throw error to error function
    throw new Error('Failed to fetching URL 404');
}
// the files is always designed by Json
const data = await response.json();
setTodos(data);
// when it catch the error
    } catch (err) { 
        setError(err.message)
// for the loading part
    } finally{
        setLoading(false)
    }
};
// we have to call it out(function)
fetchTodos();
}, [2000]);
// loading part
if (loading) return <div style={{height: "100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <img src={loadingGif} />
</div>
// ______________________________-
// printing error
if(error) return <p>Error: {error}</p>
console.log(todos);
    return (
        // for mapping of json.file
    <div>

        {todos.map((value, index) =>{
            return <div key={index} style={{display: "flex"}}> 
            <p style={{marginRight: "10px"}}>{index+1}</p>
            <p>{value.title}</p>
            </div>
        })}
    </div>
    )
}

export default JsonPlaceholder