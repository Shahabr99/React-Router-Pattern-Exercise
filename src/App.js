
import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import RouteList from './RouteList'



function App() {
  const [dogs, setDogs] = useState({
    data:null,
    isLoading:true
  })

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:5001/dogs");
      setDogs({
        data: res.data,
        isLoading: false
      })
    }
    getData()
  },[])

  if(dogs.isLoading) {
    return <h1>...is Loading</h1>
  }


  return (
    <div className="App">
      <h1>Welcome to dog show</h1>
      <BrowserRouter>
        <Nav dogs={dogs.data}/>
        <div>
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
