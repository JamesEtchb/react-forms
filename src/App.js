import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [validForm, setValidForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    if(title.length > 5 && description.length > 10 && author){
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  },[title, description, author])

  // console.log(title)

  // const forSubmit = async (e) => {
  async function formSubmit(e) {
    e.preventDefault()

    if (!validForm){
      setErrorMessage('Not a valid form')
      return
    } else {
      setErrorMessage('')
    }
    try {

      // let comment = {
      //   title: title,
      //   description: description,
      //   author: author,
      // }

      let comment = {
        title,
        description,
        author,
      }
      console.log('Form submited with: ', comment)

      //really submit it to an api
      const results = await fetch('https://sql.bocacode.com/comments', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(comment),
      })
      console.log(results)
      const data = await results.json()

      console.log(data)

      setFormSubmitted(true)
      alert('Wow! Submitted')

    } catch (error) {
      console.error(error)
      setErrorMessage(
        'There was an error submitting your comment' + error.toString()
      )
    }
  }



  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <h1>Comments</h1>

        {/* Here goes the title */}
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <h3>{title}</h3>

        {/* Here goes the description */}
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <p>
          <i>{description}</i>
        </p>

        {/* This is the author */}
        <label>Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        >
          <option value="">Choose One</option>
          <option value="todd">Todd</option>
          <option value="mason">Mason</option>
          <option value="alex">Alex</option>
          <option value="james">James</option>
          <option value="">Other</option>
        </select>
        <h3>{author}</h3>

        {!formSubmitted && <button>Submit</button>}
        {errorMessage && (
          <h1>
            There was an error:
            <br />
            {errorMessage}
          </h1>
        )}
      </form>
    </div>
  )
}

export default App
