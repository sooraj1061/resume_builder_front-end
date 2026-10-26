import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import { deleteDownloadsAPI, viewDownloadsAPI } from '../Services/apiServices';
import { useState } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

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
};

export default function Download({ isAnimationActive = true }) {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allDownloads,setallDownloads]=useState([])

  const getDownloads=async()=>{
    const response=await viewDownloadsAPI()
    console.log(response);
    setallDownloads(response.data)
    
  }
  useEffect(()=>{
    getDownloads()
  },[])

  const deleteDownloads=async(id)=>{
  try{
    const response=await deleteDownloadsAPI(id)
    console.log(response);
    getDownloads()
    
  }catch(error){
    console.log(error);
    
  }
  }

  return (
    <>
    <div>
      <Container>
            <Box
      sx={{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
         py:'10px',
      }}
    >
     <Typography variant='h3'>All Downloaded Resume Details</Typography>
     <Button  onClick={handleOpen}>View Chart</Button>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'grey',textAlign:'center'}}>
            Resume Download count by job role
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Graph
          </Typography>
           <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'red',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={2} />
      {/* <RechartsDevtools /> */}
    </PieChart>
        </Box>
      </Modal>
     
      
    </Box>
    <Typography variant='h6'>Total Downloaded Resumes from our Site is 10</Typography>
    <Stack direction={{ xs:'column',sm:'row'}}
      spacing={{xs:1,sm:2,md:4}}
      sx={{display:'flex',justifyContent:'space-evenly',
        alignItems:'Center',
        flexWrap:'wrap',
        my:'20px',
    
      }}>
      {
        allDownloads.length>0?
        allDownloads.map(item=>(
         <div>
          <p>Downloaded Date:{item.formatedDate}</p> 
          <Button variant='contained' onClick={()=>deleteDownloads(item.id)}>DELETE</Button>
           <Paper elevation={24} 
          sx={{width:'500px',height:'400px',padding:'20px'}}>
           <img src={item.imageUrl} width={'500px'} height={'400px'} alt="" />
         </Paper>
         </div>
        ))
        :"no data"
        
      }  
      </Stack>
     
      </Container>
    </div>
      
    
       
        
      
    
   
    </>
  )
}
