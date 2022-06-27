import React from "react";
import { FaCogs } from "react-icons/fa"
import { Link } from "react-router-dom";
const SettingsIcon = ({darkMode}) => {
  return (
    <div >
        
     <Link to="/about" title="Settings">
         {console.log(darkMode, "Settings Page")}
         <FaCogs size={30}  style={{ color: darkMode ? 'white':'black'}}/>
         </Link>
    </div>
  )
}

export default SettingsIcon