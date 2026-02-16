import { useState } from 'react'
import axios from 'axios';
import './App.css'

const postEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
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
    axios.post(postEndpoint, formData)
         .then(res => {
          console.log("✅ Post pubblicato con successo");
          alert("✅ Post pubblicato con successo")
         })
    
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
              </div>
              <div className='form-check text-start my-3'>
                <input type="checkbox" id='public' name='public' className='form-check-input' onChange={handleForm} checked={formData.public}/>
                <label htmlFor="public" className='form-check-label'>Make the post public</label>
              </div>
                <button className='btn btn-primary my-3'>Pubblica Post</button>
          </div>
        </form>
    </div>
  )
}

