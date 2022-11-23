import React, { useEffect } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setFriends } from 'state'
import WidgetWrapper from 'components/WidgetWrapper'
import Friend from 'components/Friend'
import api from 'utils/axios'

const FriendListWidget = ({userId}) => {
  const dispatch = useDispatch()
  const {palette} = useTheme()
  const token = useSelector((state) => state.token)
  const friends = useSelector((state) => state.user.friends)

  const getFriends = async()=>{
    const {data} = await api.get(`/users/${userId}/friends`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(setFriends({friends:data}))
  }

  useEffect(()=>{
    getFriends()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
       color={palette.neutral.dark}
       variant='h5'
       fontWeight='500'
       sx={{mb: '1.5rem'}}
       > 
        Friend List
      </Typography>
      <Box display='flex' flexDirection='column' gap='1.5rem'>
        {friends?.map((friend)=>(
          <Friend
           key={friend._id} 
           name={`${friend.firstName} ${friend.lastName}`}
           subtitle={friend.occupation}
           userPicturePath={friend.picturePath}
           />
        ))}
      </Box>
    </WidgetWrapper>
  )
}

export default FriendListWidget