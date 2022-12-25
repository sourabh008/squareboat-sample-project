import { Avatar, CardHeader } from '@mui/material'
import React from 'react'

import './applicantCard.css'

const ApplicantsCard=({candidate})=>{
    return(
        <div className='applicant-card-wrapper'>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#D9EFFF' }} aria-label="recipe">
            {candidate.name[0]}
          </Avatar>
        }
        title={candidate?.name}
        subheader={candidate?.email}
      />
       <div className='skills-wrapper'>
       <p>Skills</p>
       <div className='skills'>
        {candidate?.skills}
       </div>
       </div>
      </div>
    )
}
export default ApplicantsCard