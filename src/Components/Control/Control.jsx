import React from 'react'

export const Control = props => {


    const filterHandler = (e) => {
        props.setFilter(e.target.innerHTML)
    }

    return (
        <div className="bg-white rounded-input p-4 text-gray-400 mt-10 flex justify-evenly text-sm">
            <button onClick={filterHandler}>All</button>
            <button onClick={filterHandler}>Active</button>
            <button onClick={filterHandler}>Completed</button>
        </div>
    )
}
