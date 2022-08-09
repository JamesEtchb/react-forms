import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState('title input')
  const [description, setDescription] = useState('description text')
  const [author, setAuthor] = useState('')

  console.log(title)

  function formSubmit(e) {
    e.preventDefault()
    console.log('form submitted')
  }


  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <h1>Comments</h1>

        {/* Here goes the title */}
        <label>Title</label>
        <input 
        type='text' 
        value={title} 
        onChange={(e) => {setTitle(e.target.value)}} />
        <h3>{title}</h3>

        {/* Here goes the description */}
        <label>Description</label>
        <textarea 
        value={description}
        onChange={(e) => {setDescription(e.target.value)}} />
        <p><i>{description}</i></p>


        {/* This is the author */}
        <label>Author</label>
        <select value={author}
        onChange={(e) => {setAuthor(e.target.value)}}
        >
          <option value=''>Choose One</option>
          <option value='todd'>Todd</option>
          <option value='mason'>Mason</option>
          <option value='alex'>Alex</option>
          <option value='james'>James</option>
          <option value='other'>Other</option>
        </select>
        <h3>{author}</h3>

        
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
