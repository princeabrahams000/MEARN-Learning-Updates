import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
 
  //state to hold values from input field
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:'100%', height:'100vh'}}>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h2>Simple Interest Calculator</h2>
        <p>Calculate your simple interest easily</p>

        <div className='mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-4'>
        <h3 className='fs-1 fw-bolder'>₹ 00</h3>
        <p>Total simple interest</p>
        </div>

        <form className='mt-5'>
          <div className="mb-3">
          <TextField id="outlined-basic" label="₹ Principle Amount" value={principle || ""} variant="outlined" className='w-100' />
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" label="Rate of Interest (p.a)%" value={interest || ""} variant="outlined" className='w-100' />
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" label="Year(Yr)" value={year || ""} variant="outlined" className='w-100' />
          </div>
          <div className='d-flex justify-content-between width-100 mt-4'>
          <Button variant="contained" color="success" style={{width:'190px', height:'60px'}}>Calculate</Button>
          <Button variant="outlined" style={{width:'190px', height:'60px'}}>Reset</Button>
          </div>
        </form>



      </div>
   
    </div>
  )
}

export default App
