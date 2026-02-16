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
    const {name, value} = e.target; 

    setFormData({
      ...formData, 
      [name]: value, 
    })
  }

  return (
    <div className='container'>
      <h1>Add new post</h1>
        <form className='bg-light card'>
          <div className='card-body'>
            <div className='form-group d-flex justify-content-center gap-4'>
              <div className='author-input'>
              <label className='form-label' htmlFor="author">Author</label>
              <input type="text" 
                     value={formData.author}
                     onChange={handleForm}
                     name='author'
                     className='form-control'
                     id='author'
                     />
              </div>
              <div className='title-input'>
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
              <div className='post-input form-group mt-3'>
                <label htmlFor="body" className='form-label'>Post</label>
                <textarea name="body" value={formData.body} id="body" className='form-control' onChange={handleForm} />
              </div>
          </div>
        </form>
    </div>
  )
}

