import React, {useState, useContext, useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {Redirect} from 'react-router-dom'
import { Context } from '../utils/context'


const Settings = () => {
  const {auth, firestore} = useContext(Context)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [changeState , setChangeState] = useState(false)
  const [bio, setBio] = useState('')
  const [successfullLogout, setIsSuccessfullLogout] = useState(false)
  const [user] =  useAuthState(auth)



  const handleSubmit = async (event) => {
      event.preventDefault()
      setChangeState(true);
      firestore.collection("users").get()
      .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
     
      if(doc.data().uid == user.uid){
        firestore.collection('users').doc(doc.id).update({
        description : bio,
        userPhoto:image,
        displayName: name || 'Аноним',
      },{merge:true})
      }
  });
  setChangeState(false)
  setName('')
  setImage('');
  setBio('')
});

  
 

    /*
      users.update({
        description : bio,
        userPhoto:image,
        displayName: name || 'Аноним',
      },{merge:true})
      */
    }
          
  



  if (successfullLogout) {
    return <Redirect to="/" />
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Настройки</h1>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Ссылка на изображение профиля (url)"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Имя"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Дополнительная информация"
                    value={bio}
                    rows="8"
                    onChange={e => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
                <button
                disabled = {changeState}
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Обновить информацию
                </button>
              </fieldset>
            </form>
            <hr />
            <button  className="btn btn-outline-danger">
              Выйти из профиля
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings