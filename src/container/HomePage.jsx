import React from 'react' ;
import SideNav from '../component/sideNav/sideNan';
import {Route , Switch} from 'react-router-dom' ;
import Addnotes from '../component/mainBody/addNotes/addNotes';
import Todo from '../component/mainBody/ToDo/todo';
import style from './homePage.module.scss'
const HomePage = () => {
    return(
        <div className={style.homepage}>
            <div  className={style.homepage_sidenav}><SideNav /></div>
            <div className={style.homepage_mainpage}>
            <Switch>
                <Route path='/' exact  component={Addnotes} />
                <Route path='/todo' exact  component={Todo} />
            </Switch>
            </div>
        </div>
    )
}
export default HomePage ;