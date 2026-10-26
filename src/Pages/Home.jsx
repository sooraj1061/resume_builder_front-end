

import '../App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from'@mui/icons-material/Instagram';
import FacebookIcon from'@mui/icons-material/Facebook';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function Home() {
   const navigate = useNavigate();
  return (
    <> <div className="hero">
   <div id="content">
    <div>Designed To Get Hired. </div>
    <div>Your Skills, Your story</div>
    <div>Your Next Job-All In One.</div>
        <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button id="btn" onClick={() =>navigate('/resume')}>Build Your Resume With AI</Button>
      
    </ButtonGroup>
   </div>
   
    </div>
     <h1>What is AI rBuilder?</h1>
       <div className='row'>
       
    <div className="col"><p>An AI Resume Builder is a web application that uses Artificial Intelligence to help users create professional and effective resumes. It simplifies the resume creation process by providing an easy-to-use interface where users can enter their personal information, education, skills, work experience, projects, certifications, and other details.</p>
    <p>The AI helps users improve the quality of their resume content by correcting grammar, improving sentences, and generating professional descriptions. For example, users can provide simple information about their work or projects, and the AI can convert it into clear and professional statements that better highlight their skills and achievements.</p>
    <p>An AI Resume Builder can also help users create ATS-friendly resumes. It can analyze a job description and suggest relevant keywords, skills, and improvements that match the requirements of the job. This helps increase the chances of the resume being noticed by Applicant Tracking Systems (ATS) used by many companies during recruitment.</p>
    <p>The application can provide different professional templates that users can customize according to their preferences. After completing the resume, users can preview, edit, save, and download it as a PDF. Overall, an AI Resume Builder saves time, improves resume quality, and helps users create a professional resume that is better suited for modern job applications.</p>
    
    </div>
    <div className="col">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoE9YAwmP-WcJpfKQafvGYEWtN8pL9Gc0VC79grjlQxw&s=10" alt="" width={500} height={500}/>
    </div>
   </div>
   <div id='test'>
    <img src="https://thumbs.dreamstime.com/b/testimonials-icon-special-blue-banner-background-testimonials-icon-isolated-special-blue-banner-background-abstract-124893140.jpg" width={1800} height={400} alt="" />
   </div>
   <h1>Testimony</h1>
   <div className='row'>
    <div className="col">
      <h2>Trusted by professionals worldwide.</h2>
      <p>The AI Resume Builder provides a simple and effective way to create professional resumes without requiring advanced design or writing skills. Its user-friendly interface makes it easy for users to enter their personal information, education, skills, projects, and work experience. The application helps save time and makes the overall resume-building process more convenient.</p>
      <p>One of the most useful features of the platform is its AI-powered content improvement. It can help users write professional descriptions, correct grammatical mistakes, and suggest relevant skills and keywords based on their career goals. This makes the resume more informative, professional, and suitable for modern recruitment processes.</p>
      <p>Overall, the AI Resume Builder is a useful tool for students, fresh graduates, and job seekers who want to create a high-quality resume quickly. With features such as professional templates, AI suggestions, ATS-friendly content, resume preview, and PDF download, the platform provides a complete solution for creating an effective resume and improving job application opportunities.</p>
    </div>
    <div className="coll">

      <div id="col">
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      </div>
          <div id="col">
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      </div>
          <div id="col">
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      </div>
          <div id="col">
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      <div className="colc2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10" height={100} alt="" /></div>
      </div>
      
     
    </div>
    </div>
   <div className='row'>
    <div className="col">
      <h1>AI rBUILDER</h1>
      <p>Our AI Resume Builder is a simple and user-friendly platform designed to help students, fresh graduates, and job seekers create professional resumes quickly and easily. It allows users to add their personal details, education, skills, projects, and work experience while providing AI-powered suggestions to improve content, grammar, and professional descriptions. With professional templates, ATS-friendly content, resume preview, and PDF download features, the platform makes resume creation faster, easier, and more effective, helping users present their skills and experience confidently and improve their job application opportunities.</p>
    </div>
     <div className="col">
    
    </div>
    <div className="col">
      <h1>Contact Us</h1>
      <div className='box'>
         <div className='email'><EmailIcon/><p>resumebuilder@gmail.com</p></div> 
     <div className='email'><PhoneIcon/><p>7635673892</p></div> 
      <div className='email'><p>Connect With Us</p></div> 
      <div className='email'><InstagramIcon/><FacebookIcon/><FaWhatsapp /></div> 
      </div>
   
    </div>
   </div>
   </>
   
    
    
     )

}
