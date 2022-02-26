import {AiFillDashboard} from "react-icons/ai"
import {MdManageAccounts} from "react-icons/md"
import {BiBookReader} from "react-icons/bi"
import {GiTeacher} from "react-icons/gi"
import {FaUsers} from "react-icons/fa"
import {CgUserAdd} from "react-icons/cg"
import {GiBookCover} from "react-icons/gi"
import {HiClipboardList} from "react-icons/hi"
import {MdAddModerator} from "react-icons/md"
export const sideBarData=[
    {
        icon:<AiFillDashboard/>,
        list:"Dashboard",
        path:"/admin/dashboard",
        dropdown:[]
    },
    {
        icon:<BiBookReader/>,
        list:"ManageCourse",
        path:false,
        dropdown:[
             {
            name:"AddCourse",
            icon:<MdAddModerator/>,
            link:"/admin/manage/course",
            dropdown:[]
        },
        {
            name:"CourseList",
            icon:<HiClipboardList/>,
            link:"/admin/manage/course/list",
            dropdown:[]
        },
        {
            name:"SyllabusList",
            icon:<GiBookCover/>,
            link:false,
            dropdown:[]
            
        }]
    },
    {
        icon:<MdManageAccounts/>,
        list:"ManageStudent",
        path:false,
        dropdown:[]
    },
    {
        icon:<GiTeacher/>,
        list:"ManageTeacher",
        path:false,
        dropdown:[{
            name:"AddTeacher",
            icon:<CgUserAdd/>,
            link:"/admin/manage/teacher"
        
        },
        {
            name:"TeacherList",
            icon:<FaUsers/>,
            link:"/admin/manage/teacher/list",
            dropdown:[]
            
        }]
    }
]