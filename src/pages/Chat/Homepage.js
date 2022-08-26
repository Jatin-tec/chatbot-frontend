import React from 'react'
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Homepage.css"
import ResponsiveAppBar from '../../components/Navbar/Navbar';
export default function Homepage() {
  return (
    <div className='HomepageCointainer'>
      <ResponsiveAppBar />
      <h2 className='MainHeading'>Templates</h2>
      <div className="BottomCointainer">

        <div className='First' >
          <div className='FirstContent'>
            <div className='Heading'>Covid-19</div>

          </div>
          <div className="new">Chatbot to detect the Covid-19 based on the patient symptoms.</div>
          <div className='filler'></div>
          <div className='TestButton'>
            <Button variant="contained">Test</Button>
          </div></div>

      </div>
    </div>
  )
}
