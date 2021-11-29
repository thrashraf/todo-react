import React from 'react'

export const Control = () => {
    return (
        <div className="bg-white rounded-input p-4 text-gray-400 mt-10 flex justify-evenly text-sm">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}
