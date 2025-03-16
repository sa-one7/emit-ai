import React, { useCallback, useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
import { useUser } from '@clerk/clerk-react';


import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    const { user } = useUser();


  return (
    <div className='main'>
        <div className="nav">
                <p>Emit</p>
                <SignedOut>
                    <SignInButton mode="redirect" />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </div>
        <div className="main-container">

            {!showResult
            ?<>
                <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beatuiful places to see on an upcoming road trip.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summrize this concept: Urban Planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activites for our work retreat.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breakdown the approach in the following code.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                    <div className="result-title">
                    <img src={user?.imageUrl} alt="User profile" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                        
                    </div>
            </div>
            }

            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Emit may display inaccurate data, Check Important info. 
                </p>
            </div>

        </div>
    </div>
  )
}

export default Main