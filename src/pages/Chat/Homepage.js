import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Homepage.css"
import ResponsiveAppBar from '../../components/Navbar/Navbar';
export default function Homepage() {
  return (
    <div className='HomepageCointainer'>
      <ResponsiveAppBar />
      <div className="BottomCointainer">

        <aside className="Shrink">
          <div className="LeftCointainer">

          </div>
        </aside>
        <main className="RightContainer">

        </main>
      </div>
    </div>
  )
}
