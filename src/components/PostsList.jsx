import { useState, useEffect } from 'react'

function PostsList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 10))
        setLoading(false)
      })
      .catch(err => {
        setError('Error al cargar las publicaciones')
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="loading">Cargando...</p>
  if (error) return <p className="error-message">{error}</p>

  return (
    <ul className="posts-list">
      {posts.map(post => (
        <li key={post.id} className="post-item">
          <h3 className="post-title">
            {post.title}
          </h3>
          <p className="post-body">{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default PostsList