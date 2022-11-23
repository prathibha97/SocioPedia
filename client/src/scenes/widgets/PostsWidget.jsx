import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from 'state'
import api from 'utils/axios'
import PostWidget from './PostWidget'

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const token = useSelector((state) => state.token)

  const getPosts = async () => {
    const {data} = await api.get(`/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    dispatch(setPosts({ posts: data }))
  }

  const getUserPosts = async () => {
    const {data} = await api.get(`/posts/${userId}/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    dispatch(setPosts({ posts: data }))
  }

  useEffect(() => {
    if (isProfile) {
      getUserPosts()
    } else {
      getPosts()
    }
  }, []) //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {posts?.map(({
        _id,
        userId,
        firstName,
        lastName,
        description,
        location,
        picturePath,
        userPicturePath,
        likes,
        comments }) => (
        <PostWidget key={_id}
          postId={_id}
          PostUserId={userId}
          name={`${firstName} ${lastName}`}
          description={description}
          location={location}
          picturePath={picturePath}
          userPicturePath={userPicturePath}
          likes={likes}
          comments={comments}
        />
      ))}
    </>
  )
}

export default PostsWidget