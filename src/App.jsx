import { useContext, useEffect } from 'react';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

import { SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn, RedirectToSignUp } from "@clerk/clerk-react"

const App = () => {

  

  return (
    
      <>
 {/* Redirect to Sign In if not logged in */}
 <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      {/* Show full app only after login */}
      <SignedIn>
        <Sidebar />
        <Main />
      </SignedIn>
      </>

  )
}

export default App