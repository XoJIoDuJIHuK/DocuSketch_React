import { useState } from 'react';
import { Button, Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as iconsObject from '@fortawesome/free-solid-svg-icons';


function App() {
  const icons = Object.values(iconsObject);
  const [icon, setIcon] = useState(icons[0]);
  return (
    <>
      <main>
        <Button variant='outlined' onClick={() => {
          const index = Math.floor(Math.random() * icons.length);
          const newIcon = icons[index];
          console.log(newIcon.iconName);
          setTimeout(() => {
            setIcon(newIcon);
          }, 3000);
        }}>Switch icon</Button>
        <Box className='svg-wrapper'><FontAwesomeIcon icon={icon} /></Box>
      </main>
    </>
  )
}

export default App
