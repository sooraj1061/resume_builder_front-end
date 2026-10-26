import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { editResumeAPI } from '../Services/apiServices';
import { ImCross } from "react-icons/im";
import { useRef } from 'react';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight:"80vh",
  overflowY:"auto"
};


function Edit({resume,setResume}) {
  console.log(resume);

  const inputRef=useRef();
  
  const [open, setOpen] = React.useState(false);

  const handleAddSkills=(skill)=>{
  console.log(skill);
  if(skill){
    if(resume?.skills?.includes(skill)){
      alert("skill already exists")
    }else{
      setResume({...resume,skills:[...resume?.skills,skill]})
    }
    inputRef.current.value=""
  }else{
    alert("please fill a valid data")
  }
  
  }

  const handleDeleteSkills=(skill)=>{
    setResume({...resume,skills:resume.skills.filter(item=>item!=skill)})

  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateResume=async()=>{
    const response=await(editResumeAPI(resume.id,resume))
    console.log(resume);
    
  }
  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Edit CV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Container>
            <Box sx={{fontSize:"30px",fontWeight:"1000",backgroundColor:'maroon',color:"white",padding:"10px"}}>Edit Resume Details</Box>
            <Box sx={{color:"black",fontSize:"30px",fontWeight:"700",margin:"10px"}}>Personal Details</Box>
            <Stack>
              <TextField value={resume.fullName} onChange={e=>setResume({...resume,fullName:e.target.value})} label="fullname" variant='standard'/><br />
              <TextField value={resume.location} onChange={e=>setResume({...resume,location:e.target.value})} label="location" variant='standard'/><br />
            <FormControl variant='standard' >
          <InputLabel value={resume.job} onChange={e=>setResume({...resume,job:e.target.value})}>Job Title</InputLabel>
          <Select>
            <MenuItem value='developer'>developer</MenuItem>
          </Select>
          </FormControl>
            <br />
            </Stack>
            <Box sx={{color:"black",fontSize:"30px",fontWeight:"700",margin:"10px"}}>Contact Details</Box>
               <Stack>
              <TextField value={resume.email} onChange={e=>setResume({...resume,email:e.target.value})} label="email" variant='standard'/><br />
              <TextField value={resume.phone} onChange={e=>setResume({...resume,phone:e.target.value})} label="ContactNumber" variant='standard'/><br />
              <TextField value={resume.linkedin} onChange={e=>setResume({...resume,linkedin:e.target.value})} label="Linkedin Link" variant='standard'/><br />
              <TextField value={resume.github} onChange={e=>setResume({...resume,github:e.target.value})} label="Github Link" variant='standard'/><br />
            </Stack>
            <Box sx={{color:"black",fontSize:"30px",fontWeight:"700",margin:"10px"}}>Educational Details</Box>
               <Stack>
              <TextField value={resume.degree} onChange={e=>setResume({...resume,degree:e.target.value})} label="Bachelor's degree" variant='standard'/><br />
              <TextField value={resume.college} onChange={e=>setResume({...resume,college:e.target.value})} label="College/University Name" variant='standard'/><br />
              <TextField value={resume.year} onChange={e=>setResume({...resume,year:e.target.value})} label="Year of Graduation" variant='standard'/><br />
              
            </Stack>
            <Stack>
            <Box sx={{color:"black",fontSize:"30px",fontWeight:"700",margin:"10px"}}>Skills</Box>
            </Stack>
            <Stack spacing={2} direction={'row'}>
              <TextField value={resume.skills} onChange={e=>setResume({...resume,skills:e.target.value})} variant='standard' label='Add New Skill'></TextField>
              <TextField  inputRef={inputRef}/>
              <Button onClick={()=>handleAddSkills(inputRef.current.value)}>Add</Button>
              <br />
             
            </Stack>
            <Typography>Added Skills:</Typography>
            <Box>
               {
                resume?.skills?.map(item=>(
                  <Button>{item} <span onClick={()=>handleDeleteSkills(item)}><ImCross /></span> </Button>
                 )
                )
              }
            </Box>
            
             <Box sx={{color:"black",fontSize:"30px",fontWeight:"700",margin:"10px"}}>Summary</Box>
             <TextField value={resume.summary} onChange={e=>setResume({...resume,summary:e.target.value})} variant='standard' label='summary'/><br/><br/><br/>
             <Button onClick={handleUpdateResume} sx={{color:'white',backgroundColor:'brown'}}>Update CV</Button>

         </Container>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
