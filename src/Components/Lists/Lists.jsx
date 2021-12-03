import axios from 'axios'
import React from 'react'
import deleteIcon from '../../assets/delete.png'
import checkIcon from '../../assets/icon-check.svg'

export const Lists = props => {

    const checkListStyle = () => {

        return {
            background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,45,252,1) 100%)'
        }
    }

    const checkHandler = id => {

            const index = props.data.findIndex(list => list.id === id);

            const data = [...props.data]
            data[index].check = !data[index].check

            props.setData(data);
            
            axios.patch(`https://react-hooks-1b64f-default-rtdb.firebaseio.com/todo/${id}.json`, {check: props.data[index].check})
            .then(res => {
                console.log(res)  
            })
            .catch(err => console.log(err))
    }


    const deleteListhandler = id => {
        axios.delete(`https://react-hooks-1b64f-default-rtdb.firebaseio.com/todo/${id}.json`) 
        .then(res => {
            console.log(res)

            const index = props.data.findIndex(list => list.id === id);
            const data = [...props.data]

            data.splice(index, 1)
            props.setData(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="mt-10">
            {props.data ? props.data.filter(list => {

                if (props.filter === 'Active') {
                     return (!list.check)
                } else if (props.filter === 'Completed') {
                    return (list.check)
                } else {
                    return list
                }

            }).map(list => {
            
            return (
                <section className="flex justify-between  bg-white px-7 py-5 first:rounded-firstChild last:rounded-lastChild dark:bg-gray-800 dark:text-white dark:line-through transition-colors duration-300 ease-out"  key={list.id}>
                <section className="flex">
                    <span onClick={checkHandler.bind(this, list.id)} className="w-6 h-6 bg-white border border-gray-400 rounded-full dark:bg-gray-900 dark:border-gray-900" style={list.check ? checkListStyle() : null}>
                        <img src={checkIcon} alt="check" className="w-3 h-3 relative top-1 left-1" style={{'display': list.check ? 'block' : 'none'}}/>
                    </span>
                    <li className="list-none pl-5" style={list.check ? {textDecoration: 'line-through', textDecorationColor: 'gray'} : null} >{list.data}</li>
                </section>
                <img src={deleteIcon} alt="delete" className="w-5 h-5 cursor-pointer" onClick={deleteListhandler.bind(this, list.id)}/>
            </section>            

            )
        }) : 'loading...'}
        </div>
    )
}
