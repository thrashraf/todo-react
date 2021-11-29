import React from 'react'
import moonIcon from '../../assets/icon-moon.svg'

export const Nav = () => {
    return (
        <div className="flex justify-between">
            <h1 className=" text-white font-medium text-2xl tracking-custom">TODO</h1>
            <img src={moonIcon} alt="moon" className=" w-5 h-5" />
        </div>
    )
}
