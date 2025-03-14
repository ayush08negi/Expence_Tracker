import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
  Navigate
} from 'react-router-dom'

import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element ={ <Root/> }/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/> }/>
          <Route path='/login' element = {<Login/> }/>
          <Route path='/dashboard' element = {<Home/> }/>
          <Route path='/income' element = {<Income/> }/>
          <Route path='/expence' element = {<Expense/> }/>
        </Routes>
      </Router>
    </div>
  )
};

// const Root =() =>{
//   // check if token exist in local storage or not
  
// }

export default App 