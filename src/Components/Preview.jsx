import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function Preview({resumeDetails}) {
  return (
    <div>
      <Paper elevation={24} sx={{padding:'30px',width:'600px',height:'600px'}}>
        <Typography variant='h3' sx={{textAlign:'center',fontWeight:'900'}}>
          {resumeDetails.fullName?resumeDetails.fullName : "fullName"}
        </Typography>
        <Typography variant='h4' sx={{textAlign:'center',fontWeight:'900'}}>
         {resumeDetails.job?resumeDetails.job:"Job"}
        </Typography>
         <Typography variant='h6' sx={{textAlign:'center',fontWeight:'200'}}>
        {resumeDetails.email?resumeDetails.email:"name@gmail.com"}|{resumeDetails.phone?resumeDetails.phone:"9898767656"} |{resumeDetails.location?resumeDetails.location:"thrissur"} |{resumeDetails.linkedin?resumeDetails.linkedin:"linkedin"}| {resumeDetails.github?resumeDetails.github:"github"}
        </Typography>
       <Divider><Typography variant='h5' sx={{textAlign:'center',fontWeight:'500'}}>
         Education
        </Typography></Divider>
        <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500'}}>
      {resumeDetails.degree?resumeDetails.degree:"qualification"}
        </Typography>
        <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500'}}>
      University/College Name:{resumeDetails.college?resumeDetails.college:""}
        </Typography>
        <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500'}}>
      Year Of Graduation:{resumeDetails.year?resumeDetails.year:""}
        </Typography>
        <Divider><Typography variant='h5' sx={{textAlign:'center',fontWeight:'500'}}>
        Professional Summary
        
        </Typography></Divider>
        <Box >
          {resumeDetails.summary?resumeDetails.summary:""}
        </Box>
        <Divider><Typography variant='h4' sx={{textAlign:'center',fontWeight:'900'}}>
        Skills
        </Typography></Divider>
        <Stack direction='row' sx={{direction:'column',flexWrap:"wrap",justifyContent:'space-around',alignItems:'center'}}>
          {
            resumeDetails?.skills?.map(item=>(
              <Button>{item}</Button>
            ))
          }
        </Stack>
         </Paper>
    </div>
  )
}
