import React from 'react'
import {TextField,Button} from "@mui/material"
function LinkUploadModal({linkModal,onClick}) {
  return (
    <div style={{position:"absolute",zIndex:10000,left:0,top:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.411)",display:"flex",alignItems:"center",justifyContent:"space-around"}} >
        <div className="mainModal" style={{height:"40%",width:"55%",backgroundColor:"white",borderRadius:"15px", boxShadow: "0px 3px 14px #0000000f",display:"grid",gridTemplateRows:"50% 50%",padding:"2%"}}>
            <div className="linkCon" style={{display:"flex",alignItems:"center",justifyContent:"space-around",padding:"5%"}}>
                <TextField fullWidth  label="Paste Link Here!"/>

            </div>
            <div className="btnCon" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5%"}}>
                <Button width="30%" color='error' variant="contained" onClick={()=>{onClick(!linkModal)}}>Cancle</Button>
                <Button width="30%" color='success' variant="contained">Upload</Button>

            </div>

        </div>

    </div>
  )
}

export default LinkUploadModal