import React from 'react'
import {AiOutlineMessage} from "react-icons/ai"
function UpcomingSession() {
  return (
        <div className="mainContainrt" style={{height:"",backgroundColor:"",borderRadius:"70px",boxShadow:"0px 3px 14px #0000000f",display:"grid",gridTemplateColumns:"8% 1fr 30% 15%",padding:"15px 20px",margin:"1%"}}>
            <div className="msgContainer" style={{backgroundColor:"",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <AiOutlineMessage size={"55px"} color={"green"}/>

            </div>
            <div className="detailsContainer" style={{backgroundColor:"",display:"grid",gridTemplateRows:"50% 50%"}}>
                <div className="sessionStatusContainer" style={{backgroundColor:"",display:"flex",alignItems:"center",}}>
                <h4 style={{font:"600 20px/34px sans-serif",color:"#3eb05a"}}>Upcoming Session</h4> 

                </div>
                <div className="topicNameContainer" style={{backgroundColor:"",display:"flex",alignItems:"center",justifyContent:"left"}}>
                <h5 style={{color:"",font:"Bold 17px sans-serif"}}>Topic: Capstone Project Presentation & Demo</h5>

                </div>

            </div>
            <div className="dateAndTimeContainer" style={{backgroundColor:"",display:"grid",gridTemplateRows:"50% 50%",font:"Normal 16px/26px sans-serif",textAlign:"center"}}>
                <div className="time">
                8:00 PM - 9:00 PM

                </div>
                <div className="date">
                April 4th

                </div>

            </div>
            <div className="btnContainer" style={{backgroundColor:"",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            <div class="status" style={{background:"#DCD4D4 0% 0% no-repeat padding-box",border:"1px solid #C6BFBF",borderRadius:"24px",font:"Normal 14px/22px sans-serif",padding:"3%"}}>SCHEDULED</div>

            </div>


        </div>
  )
}

export default UpcomingSession