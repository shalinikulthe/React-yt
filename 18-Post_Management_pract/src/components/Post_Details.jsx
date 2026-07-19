import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Post_Details = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [post,SetPost] = useState(null)

   const fetchPost = async () => {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        SetPost(resp.data)
    }

    useEffect(()=>
    {
      fetchPost()
    },[id])

    if (!post) return <h1 className="text-3xl font-bold text-center mt-10">Loading...</h1>

  return (
    <div className="min-h-screen flex justify-center items-center p-3">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Id: {post.id}
        </h2>

        <h3 className="text-2xl font-semibold text-gray-600 mb-4">
          {post.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {post.body}
        </p>

        <button 
          onClick={() => navigate(-1)}
          className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          Back
        </button>

      </div>

    </div>
  )
}

export default Post_Details