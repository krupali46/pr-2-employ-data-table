import Create from './componets/Create/Create';
import { Route, Routes } from 'react-router-dom';
import EditData from './componets/Edit/EditData.jsx';
import ViewTable from './componets/View/ViewTable.jsx';
import Headers from './componets/Headers/Headers.jsx';



function App() {

  return (
    <>

    <Headers/>

      <Routes>

        <Route path='/' element={<ViewTable />} />
        <Route path='/createform' element={<Create />} />
        <Route path='/edit/:id' element={<EditData />} />

      </Routes>
    </>
  )
}

export default App;

