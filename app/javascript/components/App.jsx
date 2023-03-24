import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { UserProvider } from '../contexts/user.context'


function App() {
  return (
    <>
        <BrowserRouter>
			<UserProvider>
                <Routes/>
			</UserProvider>
		</BrowserRouter>
    </>
  )
}

export default App