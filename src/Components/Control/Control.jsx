import React from 'react'

export const Control = props => {


    const filterHandler = (e) => {
        props.setFilter(e.target.innerHTML)
    }

    const activeFilter = value => {
        return value === props.filter ? {color: '#998CEB'} : null; 
    }

    return (
        <div className="bg-white rounded-input p-4 text-gray-400 mt-10 flex justify-evenly text-sm dark:bg-gray-800 dark:text-white transition-colors duration-300 ease-out">
            <button onClick={filterHandler} style={activeFilter('All')}>All</button>
            <button onClick={filterHandler} style={activeFilter('Active')}>Active</button>
            <button onClick={filterHandler} style={activeFilter('Completed')}>Completed</button>
        </div>
    )
}
