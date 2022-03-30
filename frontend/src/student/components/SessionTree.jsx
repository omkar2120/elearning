import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getSessionListByClass} from "../../redux/actions/session.action"
function SessionTree() {
    const dispatch=useDispatch()
    useEffect(async()=>{
        await dispatch(getSessionListByClass())

    },[])
  return (
    <div>SessionTree</div>
  )
}

export default SessionTree