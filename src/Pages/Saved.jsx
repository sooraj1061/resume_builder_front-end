import React, { useEffect, useMemo, useState } from 'react'
import Button from '@mui/material/Button'
import { IoSearchSharp } from "react-icons/io5"
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { deleteSavedAPI, viewAllResumesAPI } from '../Services/apiServices';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Saved() {

const [searchkey,setSearchkey]=useState("")
const [resumes,setResumes]=useState([])
const [dummyResume,setDummyResume]=useState([])

const searchOutput= useMemo(()=>{
setResumes(dummyResume.filter(item=>item.job.includes(searchkey)))
},[searchkey])


const getAllResumes=async()=>{
  try{
    const response=await viewAllResumesAPI()
    console.log(response);
    setResumes(response.data)
    setDummyResume(response.data)
    
  }
  catch(err){
    console.log(err);
    
  }
}
useEffect(()=>{
getAllResumes()
},[])

 const deleteResume=async(id)=>{
  try{
    const response=await deleteSavedAPI(id)
    console.log(response);
   getAllResumes()
    
  }catch(error){
    console.log(error);
    
  }
  }

  return (
    <div>
      <section id="resume">
        <h1>ALL SAVED RESUMES</h1>
        <p>All resumes submitted to the platform in one place ,allowing administrators or recruiters to efficiently view,search,manage and filter candidate profiles,It provides a quick overview of available candidates and their key details,making the recruitment and candidate selection process more organized and efficient. </p>
        <input 
        onChange={(e)=>setSearchkey(e.target.value)}
         id='input' 
         type="text" 
         placeholder='search candidates by their job roles' />
        <Typography sx={{position:'absolute',right:'340px',top:'340px'}} >
           <IoSearchSharp />
        </Typography>
        <Container sx={{marginTop:'20px'}}>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >#</StyledTableCell>
            <StyledTableCell>Resume</StyledTableCell>
            <StyledTableCell >job</StyledTableCell>
            <StyledTableCell >...</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            {
              resumes.length>0?
              resumes.map((item,index=1)=>(
                <StyledTableRow key={item.id}>
              <StyledTableCell >{index+1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Link to={`/resumes/${item.id}`}> <Typography> {item.fullName}</Typography></Link>
              </StyledTableCell>
              <StyledTableCell >{item.job}</StyledTableCell>
              <StyledTableCell ><Button onClick={()=>deleteResume(item.id)}>Delete</Button></StyledTableCell>
            
            </StyledTableRow>
              ))
              :"No Data"
            }
         
        </TableBody>
      </Table>
    </TableContainer>
        
        </Container>
       
      </section>
    </div>
  )
}
