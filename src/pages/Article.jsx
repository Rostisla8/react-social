import React, {useEffect, useContext, useState} from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {Link, Redirect} from 'react-router-dom'
import { Context } from '../utils/context'
import { ProfileContext } from '../utils/profileContext'

const Article = () => {
  const [isAuthor , setIsAuthor] = useState(true)
 const [state, dispatch] = useContext(ProfileContext)
 let {auth , firestore} = useContext(Context)

let [data , setData]= useState({})


  return (
    <div className="article-page">
        {!state ? 
       <div>Loading</div>
      :
      <div className="banner">
          <div className="container">
            <h1>{state.title}</h1>
            <div className="article-meta">
            <div class="row article-content">

    </div>

              <div className="info">
                
                <span className="date">
                  {state.createdAt.toDate().toLocaleDateString('ru-RU')}
                </span>
              </div>
              {isAuthor && (
                <span>
                  <Link
                    to={`/articles/${state.displayName}/edit`}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="ion-edit"></i>
                        Редактировать пост
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    
                  >
                    <i className="ion-trash-a"></i>
                    Удалить пост
                  </button>
                </span>
              )}
            </div>
          </div>
          
      </div>
}
<div className="container">
    <div class="row article-content">
        <div class="col-xs-12">

    <div>
            <div ng-bind-html="::$ctrl.article.body" class="ng-binding"><p>{state.body}</p>
    </div>
    </div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Article
