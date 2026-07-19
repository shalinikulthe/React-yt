import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Post_Page = () => {

    const [post, SetPost] = useState([])

    const navigate= useNavigate()

    const apihit = async () => {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
        SetPost(resp.data)
    }

    useEffect(()=>
    {
        apihit()

    },[])

    return (
  <div className="min-h-screen bg-gray-100 p-6">

    <h1 className="text-3xl font-bold text-center mb-8">
      Posts
    </h1>

    <div className="overflow-x-auto">

    <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">

      <thead className="bg-gray-700 text-white">

        <tr>
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Title</th>
          <th className="p-3 text-left">Body</th>
          <th className="p-3 text-left">Details</th>
        </tr>

      </thead>


      <tbody>

        {
          post.map((elm)=>{
            return (
              <tr 
                key={elm.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">{elm.id}</td>

                <td className="p-3 font-medium">
                  {elm.title}
                </td>

                <td className="p-3 text-gray-600">
                  {elm.body}
                </td>

                <td className="p-3">

                  <button 
                    onClick={()=> navigate(`/post/${elm.id}`)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                  >
                    Show
                  </button>

                </td>

              </tr>
            )
          })
        }
        
      </tbody>

    </table>

    </div>

  </div>
)
}

export default Post_Page