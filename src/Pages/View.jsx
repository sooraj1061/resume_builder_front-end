import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import  Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {downloadResumeAPI, uploadCloudinary, viewResumeApi} from '../Services/apiServices'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Edit from '../Components/Edit';
import Paper from '@mui/material/Paper';
import html2canvas from 'html2canvas';
import {jsPDF} from "jspdf";
function View() {
  const navigate=useNavigate()
  const [resume,setResume]=useState({})
  const {id}=useParams()
  console.log(id);

  const viewResume = async()=>{
    const response =await viewResumeApi(id)
    console.log(response);
    setResume(response.data)
    
    
    
  }
  console.log(resume);
  
  const downloadPdf=async()=>{
    console.log(document.getElementById('result'));
    let canvas=await html2canvas(document.getElementById('result'),{scale:3})
    console.log(canvas);
    let imageUrl=canvas.toDataURL('image/png')
    console.log(imageUrl);
  
    const pdf=new jsPDF('p','mm','a4')
    const pdfWidth= pdf.internal.pageSize.getWidth()
    const pdfHeight=(canvas.height * pdfWidth)/canvas.width
    pdf.addImage(imageUrl,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')
    const timeZone=new Date()
    console.log(timeZone);
    const formatedDate =`${timeZone.toLocaleDateString()},${timeZone.toLocaleTimeString()}`
    console.log(formatedDate);
    
    const cloudinaryResponse= await uploadCloudinary(imageUrl)
    console.log(`cloudinaryResponse:${cloudinaryResponse}`);
    

    const response=await downloadResumeAPI({...resume,imageUrl:cloudinaryResponse,formattedDate:formatedDate,resumeId:resume.id})
    console.log(response);
    
     
    
    
  }

  useEffect(()=>{
    viewResume()
  },[]

  )

  
  return (
    <div>

      <Container>
        <Box>
          <Stack direction="row" sx={{margin:"20px", justifyContent:"flex-end"}} spacing={2}>
            <Button onClick={downloadPdf} variant='contained'>Download CV</Button>
            <Edit resume={resume} setResume={setResume}/>
            <Button variant='contained'>Home</Button>
          </Stack>
        </Box>
          <Paper id='result' elevation={3}>
              <Box>
         <Stack sx={{margin:"20px"}}>
          <Typography sx={{marginLeft:"10px"}} variant='h5'>{resume?.fullName?resume.fullName:"name"}</Typography>
          <Typography>{resume?.phone?resume.phone:"phone"}</Typography>
          <Typography>{resume?.email?resume.email:"email"}</Typography>
          <Typography>{resume?.linkedin?resume.linkedin:"linkedin"}</Typography>
          <Typography>{resume?.github?resume.github:"github"}</Typography>
          <Typography>{resume?.location?resume.location:"location"}</Typography>
        </Stack>

        </Box>
        <Divider/>
      
        <Box sx={{width:"100%"}}>
         <Stack sx={{margin:"20px"}}>
          <Typography sx={{marginLeft:"10px"}} variant='h5'>Professional Summary</Typography>
          <Typography sx={{width:"100%"}}>{resume?.summary?resume.summary:"summary"}

          </Typography>
          
          
        </Stack>

        </Box>
        <Divider/>
       
        <Box>
          
          <Stack spacing="1" sx={{margin:"20px",width:"100%"}}>
            <Typography variant='h5'>Technical Skills</Typography>
           <Typography sx={{width:"100%",}}>{resume?.skills?resume.skills:"Skills"}</Typography>
        
            
         </Stack>
        </Box>
  
        <Box>
          <Stack sx={{margin:"20px"}}>
            <Typography variant='h5'>
            Education
          </Typography>
          <Typography>{resume?.degree?resume.degree:"Degree"}</Typography>
          <Typography>{resume?.college?resume.college:"College"}</Typography>
          <Typography>{resume?.year?resume.year:"Year"}</Typography>
          </Stack>
          
        </Box>
        <Divider/>
          </Paper>
       </Container>
       
         
       
       



     
    </div>
  )
}

export default View
