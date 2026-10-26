
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Download from './Pages/Download'
import Info from './Pages/Info'
import Resume from './Pages/Resume'
import Saved from './Pages/Saved'
import View from './Pages/View'
import Pnf from './Pages/Pnf'
import Edit from './Components/Edit'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/resume' element={<Resume/>}/>
       <Route path='/resume-details' element={<Info/>}/>
       <Route path='/all-resumes' element={<Saved/>}/>
       <Route path='/resumes/:id' element={<View/>}/>
       <Route path='/downloads' element={<Download/>}/>
       <Route path='/edit' element={<Edit/>}/>
       <Route path='/*' element={<Pnf/>}/>

    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
