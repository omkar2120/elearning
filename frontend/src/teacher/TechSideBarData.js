import {AiFillDashboard} from "react-icons/ai"
import {MdManageAccounts} from "react-icons/md"
import {BiBookReader} from "react-icons/bi"
import {GiTeacher} from "react-icons/gi"
import {FaUsers} from "react-icons/fa"
import {CgUserAdd} from "react-icons/cg"
import {GiBookCover} from "react-icons/gi"
import {HiClipboardList} from "react-icons/hi"
import {MdAddModerator} from "react-icons/md"
import {Add,TrendingUp} from '@mui/icons-material';
export const TechSideBarData=[
    {
        icon:<AiFillDashboard/>,
        list:"Teacher-Dashboard",
        path:"/TechDash",
        dropdown:[]
    },
    {
        icon:<BiBookReader/>,
        list:"Manage Student",
        path:false,
        dropdown:[
             {
            name:"AddStudent",
            icon:<MdAddModerator/>,
            link:"/teacher/pages/Breakouts/BreakOuts",
            dropdown:[]
        },
        {
            name:"Student-List",
            icon:<HiClipboardList/>,
            link:"/admin/manage/course/list",
            dropdown:[]
        },
       ]
    },
    
    {
        icon:<MdManageAccounts/>,
        list:"Manage Attendance",
        path:false,
        dropdown:[{
            name:"TakeAttendance",
            icon:<CgUserAdd/>,
            link:"/teacher/pages/Attendance/Attendance"
        
        },
        {
            name:"ModifyAttendance",
            icon:<FaUsers/>,
            link:"/admin/manage/student/list",
            dropdown:[]
            
        }]
    },
    {
        icon:<MdManageAccounts/>,
        list:"Manage Session",
        path:false,
        dropdown:[{
            name:"Add Session",
            icon:<CgUserAdd/>,
            link:"/teacher/pages/Calender/Calender"
        
        },
        {
            name:"Session List",
            icon:<FaUsers/>,
            link:"/admin/manage/student/list",
            dropdown:[]
            
        }
       ]
    },
  
]