import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const Input = props => {

    const [input, setInput] = useState('');
    const [isSubmit, setSubmit] = useState(false)
    

    const onSubmitHandler = e => {
        e.preventDefault()
        axios.post('https://react-hooks-1b64f-default-rtdb.firebaseio.com/todo.json',
         {
             'name': input,
              check: false
            }
        )
        .then(res => {
            const todoItem = {id: res.data.name, data: input, check:false}
            props.setData(props.data.concat(todoItem))

            console.log(props.data)
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="bg-white mt-5 rounded-input ">
            
            <form onSubmit={onSubmitHandler}>
            <input placeholder="Create a new todo..."  className="text-sm py-3 px-5 w-full rounded-input focus:border-white focus:outline-none" value={input} onChange={(e) => setInput(e.target.value)}/>
            </form>
        </div>
    )
}
