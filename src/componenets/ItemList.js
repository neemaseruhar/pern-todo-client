import React, { useEffect, useState } from 'react'
import { EditTodo } from './EditTodo';

export const ItemList = () => {

    const [todo,setTodo] = useState([]);

    const getTodoList = async () => {
        try {
            const response = await fetch('http://localhost:8000/todo');
            const jsonData = await response.json();
            setTodo(jsonData)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleDelete =  async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/todo/${id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
            })
            window.location = '/'
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getTodoList()

    }, [])

  return (
      <div className="d-flex mt-5">
      
      <table >
        <tbody>
       
          {todo.map(item => (
            <tr key={item.todo_id}>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleDelete(item.todo_id)} className="btn btn-danger">Delete</button>
              </td>
              <td>
                <EditTodo  todo={item}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
