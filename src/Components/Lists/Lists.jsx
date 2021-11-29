import { useState } from 'react'
import axios from 'axios'

import React from 'react'
import deleteIcon from '../../assets/delete.png'
import checkIcon from '../../assets/icon-check.svg'

export const Lists = props => {

    const [check, setCheck] = useState(false)

    const checkListStyle = () => {

        return {
            background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,45,252,1) 100%)'
        }
    }

    const checkHandler = id => {
            console.log(id)
            axios.patch(`https://react-hooks-1b64f-default-rtdb.firebaseio.com/todo/${id}.json`, {check: !check})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            const index = props.data.findIndex(list => {
                return list.id === id
            })
            
            console.log(index)
    }


    return (
        <div className="mt-10">
            {props.data ? props.data.map(list => {
            console.log(list)
            return (
                <section className="flex justify-between  bg-white px-7 py-5 first:rounded-firstChild last:rounded-lastChild" key={list.id}>
                <section className="flex">
                    <span onClick={checkHandler.bind(this, list.id)} className="w-6 h-6 bg-white border border-gray-400 rounded-full" style={list.check ? checkListStyle() : null}>
                        <img src={checkIcon} alt="check" className="w-3 h-3 relative top-1 left-1"/>
                    </span>
                    <li className="list-none pl-5" style={list.check ? {textDecoration: 'line-through', textDecorationColor: 'gray'} : null} >{list.data}</li>
                </section>
                <img src={deleteIcon} alt="delete" className="w-5 h-5"/>
            </section>            
           
            )
        }) : 'loading'}
        </div>
    )
}
