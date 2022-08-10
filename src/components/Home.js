import { Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
      <img src={window.location.origin + "/pet_care.jpeg"} alt={'deafult logo'}/>
      <Typography style={{marginTop:'30px'}} display='block' variant='h4'>Keep track of your pet's health and wellness!</Typography>
      <Typography style={{marginTop:'30px'}} display='block' variant='body1'>
        Start by creating an owner profile with your information.<br />
        Then create a pet profile for your pet and select yourself as an owner.<br />
        You can create profiles for all your pets and select yourself as an owner. <br />
        Your pet can also have multiple owners!<br />
        Go to your pet's page and add a new status every day to keep track of their health.
      </Typography>
    </div>
  )
}

export default Home