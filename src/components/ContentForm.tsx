import React, { ChangeEvent, FormEvent, useState } from 'react'

interface ContactFormInfo {
  name: string,
  email: string
}

const ContentForm = () => {
  const [formData, setFormData] = useState<ContactFormInfo>({
    name: "",
    email: ""
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({...prevState, [name]:value })); 
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted ", formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name: 
          <input type="text" name="name" id="" value={formData.name} onChange={handleChange} />
        </label>

        <label htmlFor="">Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default ContentForm