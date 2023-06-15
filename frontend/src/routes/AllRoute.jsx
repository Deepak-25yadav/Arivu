import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../components/Adminitems/Courses'
import DashBoard from '../components/Adminitems/DashBoard'
import EditPage from '../components/Adminitems/EditPage'
import AddCourse from '../components/Adminitems/AddCourse'


const AllRoute = () => {
  return (
    <Routes>
      <Route path='/admin' element={<DashBoard/>} />
      <Route path='/admin/dashboard' element={<DashBoard/>} />
      <Route path="/admin/courses" element={<Courses/>} />
      <Route path="/admin/edit/:id" element={<EditPage/>} />
      <Route path='/admin/addCourse' element={<AddCourse/>}/>
    </Routes>
  )
}

export default AllRoute
