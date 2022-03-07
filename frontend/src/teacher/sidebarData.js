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
export const sideBarData=[
    {
        icon:<AiFillDashboard/>,
        list:"Dashboard",
        path:"/teacher/dashboard",
        dropdown:[]
    },
    {
        icon:<MdManageAccounts/>,
        list:"Manage Student",
        path:false,
        dropdown:[{
            name:"AddStudent",
            icon:<CgUserAdd/>,
            link:"/teacher/student/add"
        
        },
        {
            name:"StudentList",
            icon:<FaUsers/>,
            link:"/teacher/student/list",
            dropdown:[]
            
        }]
    },
    {
        icon:<GiTeacher/>,
        list:"Manage Attendance",
        path:false,
        dropdown:[{
            name:"TakeAttendance",
            icon:<CgUserAdd/>,
            link:"/admin/manage/session"
        
        },
        {
            name:"ModifyAttendance",
            icon:<FaUsers/>,
            link:"/admin/manage/session/list",
            dropdown:[]
            
        }]
    },
    {
        icon:<GiTeacher/>,
        list:"Manage Session",
        path:false,
        dropdown:[{
            name:"AddSession",
            icon:<CgUserAdd/>,
            link:"/admin/manage/session"
        
        },
        {
            name:"SessionList",
            icon:<FaUsers/>,
            link:"/admin/manage/session/list",
            dropdown:[]
            
        }]
    }
]