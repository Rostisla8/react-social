import React, {useEffect, Fragment , useContext} from 'react'
import Feed from '../components/feed'
import Banner from '../components/banner'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Context } from '../utils/context'
import { useAuthState } from 'react-firebase-hooks/auth'
import Weather from '../components/Weather'


const GlobalFeed = () => {
  const {auth, firestore} = useContext(Context)
  const [messages , loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )
  const [users , loadings] = useCollectionData(
    firestore.collection('users')
  )
  

  return (
    <div className="home-page">
      <Banner/>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {loading ? 
            <p>Загружаются данные...</p> :
            <Fragment>
            <Feed articles={messages.reverse()} users = {users} loadings = {loadings} />
          </Fragment>
          }
              
          </div>
          <div className="col-md-3">
            <Weather/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalFeed
