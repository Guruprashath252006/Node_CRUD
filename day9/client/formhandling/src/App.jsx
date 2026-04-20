
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    college: '',
  })

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const dataInsert = await axios.post("http://localhost:5000/api/auth/add",formData)
      alert(dataInsert.data.msg)
      setFormData({name:"",age:"",college:""})
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="number" name="age" value={formData.age} onChange={handleChange} />
      <input type="text" name="college" value={formData.college} onChange={handleChange} />
      <input type="submit" onClick={handleSubmit}/>
    </>
  )
}

export default App