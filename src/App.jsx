import React from 'react'
import { CustomKanban } from './Pages/NotionKanban'
import { Route, Routes } from 'react-router-dom'
import { TimelineDashBoard } from './Pages/TimelineDashboard'


const App = () => {
  return (
    <>
    {/* <CustomKanban  /> */}

    <Routes>
      <Route exact path="/" element={<CustomKanban />} />
      <Route path="/timeline" element={<TimelineDashBoard />} />
    </Routes>
    </>
  )
}

export default App