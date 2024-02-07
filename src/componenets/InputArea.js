import React, { useState } from 'react'

export const InputArea = () => {
    const [description,setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const body = {description}
            const response = fetch(' http://localhost:8000/todo', {
                method:"POST",
                headers:{"content-type": "application/json"},
                body:JSON.stringify(body)
            })
            
            window.location ='/'
        } catch (error) {
            console.error(error.message)
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex mt-5">
            <input type='text' name='todo' value={description} onChange={(e) => setDescription(e.target.value)} autoComplete='off' className='"form-control'/>
            <button type='submit' className="btn btn-success">submit</button>
        </form>
    </div>
  )
}
