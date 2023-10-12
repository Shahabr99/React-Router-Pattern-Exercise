import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const DogLinks = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/whiskey" element={<Whiskey />}/>
          <Route path="/duke" element={<Duke />}/>
          <Route path="/perry" element={<Perry />}/>
          <Route path="/tubby" element={<Tubby/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default DogLinks;