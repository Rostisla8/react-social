import React, {Fragment, useContext, useEffect, useState} from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Link, NavLink, Redirect} from 'react-router-dom'
import { ProfileContext } from '../utils/profileContext';
import { Context } from '../utils/context';
import { useAuthState } from 'react-firebase-hooks/auth';
import SettingButton from '../ui/SettingButton';
import FollowButton from '../ui/FollowButton';


const UserProfile = () => {
  let secondPhoto = 'https://w7.pngwing.com/pngs/975/73/png-transparent-emoticon-smiley-embarrassment-computer-icons-smiley-miscellaneous-face-smiley.png'

  let {auth , firestore} = useContext(Context)
  const [user] =  useAuthState(auth)
  let [state , dispatch] = useContext(ProfileContext);
  const [users , loading] = useCollectionData(
      firestore.collection('users').where("uid", "==", `${state.uid}`)
  )
  
  let [data , setData]= useState({})

  
  useEffect(()=>{
    if(!loading){
      setData(users[0])
    }
  },[loading])
  
 
  

  return (
    <div className="profile-page">
     {loading ? 
       <div>Loading</div>
      :
      <Fragment>
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img className="user-img" src ={data.userPhoto ? data.userPhoto : secondPhoto} alt="" />
              <h4>{data.displayName}</h4>
              <p>{data.description}</p>
              {data.uid == user.uid ? <SettingButton/>  :<FollowButton/>}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    exact
                    to={`/profiles/${data.displayName}`}
                    className="nav-link"
                  >
                    Мои посты
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${data.displayName}/favorites`}
                    className="nav-link"
                  >
                    Понравившиеся посты
                  </NavLink>
                </li>
              </ul>
            </div>
   
          </div>
        </div>
      </div>
      </Fragment>
      }
    </div>
  )
}

export default UserProfile
