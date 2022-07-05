import React, {useState, useEffect, useContext} from 'react'
import ArticleForm from '../components/ArticleForm'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Context } from '../utils/context'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const CreateArticle = () => {
  const {auth, firestore} = useContext(Context)
  const[user] = useAuthState(auth)
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
  const [messages , loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  const onSubmit = async (articles)=>{
      firestore.collection('messages').add({
        userPhoto:user.photoURL,
        displayName:user.displayName,
        uid:user.uid,
        title:articles.title,
        description:articles.description,
        body:articles.body,
        tagList:articles.tagList,
        createdAt:firebase.firestore.FieldValue.serverTimestamp()
      })
  }

  /*
  const onSubmit = article => {
    doFetch({
      method: 'post',
      data: {
        article
      }
    })
  }
  */
  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: ''
  }


  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    </div>
  )
}

export default CreateArticle



