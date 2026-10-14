import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { FaFile, FaFileDownload } from "react-icons/fa";
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


export default function Resume() {
  const navigate= useNavigate();
  return (
    <div>
    <Container sx={{marginTop:'100px'}}>
      <Typography variant='h3'align='center'>
        Create an ATS friendly resume in minutes with AI
      </Typography>
      <Stack direction={{ xs:'column',sm:'row'}}
      spacing={{xs:1,sm:2,md:4}}
      sx={{display:'flex',justifyContent:'space-evenly',
        alignItems:'Center',
        flexWrap:'wrap',
        p:'60px'
      }}>

        <Paper elevation={24} sx={{width:'400px',height:'300px',padding:'20px',textAlign:'center',pt:'70px'}}>
        <Typography sx={{color:'blue',
            fontSize:'50px'
           }}>
            <FaFile />
           </Typography>
        <Typography variant='h4'>Add Your Details</Typography>
        <Typography variant='h5'>Our AI will Generate Skills And Summary</Typography>
        <Typography variant='h3'>Step 1</Typography>

        </Paper>
         <Paper elevation={24} sx={{width:'400px',height:'300px',padding:'20px',textAlign:'center',pt:'70px'}}>
           <Typography sx={{color:'red',
            fontSize:'50px'
           }}>
            <FaFileDownload />
           </Typography>
           
        <Typography variant='h4'>Download Your Resume</Typography>
        <Typography variant='h5'>Download CV as PDF and Start Applying</Typography>
        <Typography variant='h3'>Step 2</Typography>
         </Paper>
       
        </Stack>
        <Stack direction={{ xs:'column',sm:'row'}}
      spacing={{xs:1,sm:2,md:4}}
      sx={{display:'flex',justifyContent:'center',
        alignItems:'Center',
        flexWrap:'wrap',
       
      }}> <Button variant='contained' onClick={()=>navigate('/resume-details')}>Get Start</Button> </Stack>
    </Container>
    </div>
  )
}
