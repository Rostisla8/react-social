import React, {Fragment, useContext, useState}  from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../utils/context'


const Navbar = () => {
  let {auth} =  useContext(Context)
  const [user] =  useAuthState(auth)

  
    const userImage =
    (user && `${user.photoURL}`) ||
    'https://e7.pngegg.com/pngimages/77/946/png-clipart-smiley-emoticon-smiley-miscellaneous-face.png'


  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className = 'header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_Arms_of_Brest%2C_Belarus.svg/1200px-Coat_of_Arms_of_Brest%2C_Belarus.svg.png" alt="" />
          БрестNewss
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Новости
            </NavLink>
          </li>
          {user && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  <i className="ion-compose" />
                  &nbsp; Новый пост
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/settings" className="nav-link">
                  <i className="ion-gear-a" />
                  &nbsp; Натройки
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profile/${user.displayName}`}
                  className="nav-link"
                >
                  <img className="user-pic" src={userImage} alt="" />
                  &nbsp; {user.displayName}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={()=>{auth.signOut()}}>
                  &nbsp; Выйти
                </NavLink>
              </li>
            </Fragment>
          )}
          {!user && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                    Авторизоваться
                </NavLink>
              </li>
            </Fragment>
          )}


        </ul>
      </div>
    </nav>
  )
}

export default Navbar
