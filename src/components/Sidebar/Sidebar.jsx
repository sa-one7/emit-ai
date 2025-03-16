import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false)

  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="menu" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus1_pic} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_pic} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
                )
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question3_pic} alt="" />
          {extended?<p><a href="https://support.google.com/gemini/community?hl=en-GB&dark=1&sjid=17551565233579394562-NC">Help</a></p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_pic} alt="" />
         {extended?<p>Activity</p>:null} 
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.settings2_pic} alt="" />
          {extended?<p>Settings</p>:null} 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
