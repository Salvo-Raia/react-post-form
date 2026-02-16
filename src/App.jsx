import { useState } from 'react'
import './App.css'

const initialFormdata = {
  author: "",
  title: "", 
  body: "",
  public: false
}

export default function App() {
  const [formData, setFormData] = useState(initialFormdata);
  const handleForm = (e) => {
    // Destrutturo target // 
    const {name, value, type, checked} = e.target; 

    setFormData({
      ...formData, 
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.table(formData);
    
  }

  return (
    <div className='container'>
      <h1>Add new post</h1>
        <form className='bg-light card my-3' onSubmit={handleSubmit}>
          <div className='card-body'>
            <div className='form-group d-flex gap-4 '>
              <div className='author-input text-start'>
              <label className='form-label' htmlFor="author">Author</label>
              <input type="text" 
                     value={formData.author}
                     onChange={handleForm}
                     name='author'
                     className='form-control'
                     id='author'
                     />
              </div>
              <div className='title-input text-start'>
              <label className='form-label' htmlFor="title">Title</label>
              <input type="text" 
                     value={formData.title}
                     onChange={handleForm}
                     name='title'
                     className='form-control'
                     id='title'
                     />
              </div>
            </div>
              <div className='post-input form-group mt-3 text-start'>
                <label htmlFor="body" className='form-label'>Post</label>
                <textarea name="body" value={formData.body} id="body" className='form-control' onChange={handleForm} />
                <input type="checkbox" id='public' onChange={handleForm} checked={formData.public}/>
                <label htmlFor="public">Make the post public</label>
                <button className='btn btn-primary my-3'>Pubblica Post</button>
              </div>
          </div>
        </form>
    </div>
  )
}

