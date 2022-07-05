import React, {useState, useEffect} from 'react'


const ArticleForm = ({onSubmit , initialValues}) => {
  const [changeState , setChangeState] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const [tagList, setTagList] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setChangeState(true)
    const article = {
      title,
      description,
      body,
      tagList: tagList.split(' ')
    }
    setChangeState(false)
    onSubmit(article)
    
  }

  useEffect(() => {
    if (!initialValues) {
      return
    }

    setTitle(initialValues.title)
    setDescription(initialValues.description)
    setBody(initialValues.body)
    setTagList(initialValues.tagList)
  }, [initialValues])

  

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
          <h1 className="text-xs-center">Создание новости</h1>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Заголовок"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="О чем этот пост?"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Напишите ваше сообщение"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Введите тэги(без#)"
                    value={tagList}
                    onChange={e => setTagList(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <button
                    disabled = {changeState}
                    type="submit"
                    className="btn btn-lg pull-xs-right btn-primary"
                  >
                    Опубликовать новость
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleForm

