import {Navigate, Routes, Route} from 'react-router-dom';
import DogList from './DogList';
import DogFiltered from './DogFiltered';

const RouteList = ({dogs}) => {

  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogFiltered dogs={dogs}/>} />
      <Route path="/*" element={<Navigate to="/dogs" />} />
    </Routes>
  )
}

export default RouteList;