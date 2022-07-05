import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {Link} from 'react-router-dom'
import { Context } from '../utils/context'
import { ProfileContext } from '../utils/profileContext'


const Feed = ({articles , users , loadings}) => {
  let [isAuthPosts , setIsAuthPost] = useState(false)
  let {auth} =  useContext(Context)
  const [user] =  useAuthState(auth)
  let [state , dispatch] = useContext(ProfileContext)
  let secondPhoto = 'https://w7.pngwing.com/pngs/975/73/png-transparent-emoticon-smiley-embarrassment-computer-icons-smiley-miscellaneous-face-smiley.png'
  
   function getUserName(article,users){
    let name = ''
    for (let i = 0; i < users.length; i++){
      if (users[i].uid == article.uid){
        name = users[i].displayName
        break;
      }
    }
    return name
  }

  function getUserImage(article,users){
    let photoUrl = ''
    for (let i = 0; i < users.length; i++){
      if (users[i].uid == article.uid){
        photoUrl = users[i].userPhoto
        break;
      }
    }
    return photoUrl
  }
  
  
  return (
    <div >
      {articles.map((article, index) => (
          <div className="article-preview" key={index}>
          <div className="article-meta">
            <Link to={user && article.uid == user.uid ? `/profile/${article.displayName}`  :`/profiles/${article.displayName}`}
            onClick={()=>{dispatch({type:'sendDataUser' , payload:article})}}
            >
              <img src={!loadings && getUserImage(article,users)  ? getUserImage(article,users) : secondPhoto} alt="" />
            </Link>
            <div className="info">
              <Link
                to={user && article.uid == user.uid ? `/profile/${article.displayName}`  :`/profiles/${article.displayName}`}
                className="author"
                onClick={()=>{dispatch({type:'sendDataUser' , payload:article})}}
              >
                {!loadings && getUserName(article,users)}
              </Link>
              <span className="date">{article.createdAt.toDate().toLocaleDateString('ru-RU')}</span>
            </div>
            <div className="pull-xs-right">
            <span className='time'>{article.createdAt.toDate().toLocaleTimeString()}</span>
            </div>
          </div>
          <Link to={`/articles/${article.displayName}`} className="preview-link" 
          onClick={()=>{dispatch({type:'sendDataUser' , payload:article})}}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Читать далее...</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Feed

