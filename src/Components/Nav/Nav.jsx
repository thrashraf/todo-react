import React from 'react'
import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'

export const Nav = props => {

    const darkThemeToggle = () => {
        props.setTheme(!props.theme)
        console.log(props.theme)
    }


    return (
        <div className="flex justify-between">
            <h1 className=" text-white font-medium text-2xl tracking-custom">TODO</h1>
            <img src={props.theme ? sunIcon : moonIcon} alt="moon" className=" w-5 h-5 transition-opacity duration-500 ease-in-out" onClick={darkThemeToggle} />
        </div>
    )
}
