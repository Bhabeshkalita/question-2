import React from 'react'
import style from './sideNav.module.scss'
import { Link } from 'react-router-dom';
const SideNav = () => {
    return(
        <div className={style.nav}>
            <Link to='/'>Add notes</Link>
            <Link to='/todo'>ToDo</Link>            
            <Link to='/'>Trash</Link>
        </div>
    )
}

export default SideNav ;