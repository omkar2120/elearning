import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotice } from "../../redux/actions/global.action";

function NoticeBoard() {
  const dispatch = useDispatch()


  const theNoticeState = useSelector((state) => state.globalReducer)
  console.log(theNoticeState)

  useEffect(async () => {
    await dispatch(getAllNotice())

    
  }, [dispatch])
  return (
    <div
      className=""
      style={{
        minHeight: "90%",
        width: "95%",
        boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
        backgroundColor: "rgb(0 0 0 / 85%)",
        borderRadius: "8px",
        border: "3px solid green",
        display: "grid",
        gridTemplateRows: "15% 1fr 20%",
      }}
    >
      <Typography
        textAlign={"center"}
        component="h5"
        variant="h5"
        style={{
          textAlign: "center",
          wordSpacing: "7px",
          textTransform: "capitalize",
          fontSize: "22px",
          fontWeight: "bolder",
          color: "red",
        }}
      >
        Notice Board
      </Typography>
      <div>
          <div>
            <div className="containt" style={{ textAlign: "center", padding: "2%" }}>

              <p style={{ color: "yellow" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
            <div
              className="authorContainer"
              style={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
                alignItems: "center",
                padding: "3%",
              }}
            >
              <b style={{ color: "white", justifySelf: "flex-start" }}>25/03/2022</b>
              <b style={{ color: "white", justifySelf: "flex-end" }}>~Amit Thakur</b>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default NoticeBoard;
