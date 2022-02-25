import React from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";

export const SidebarDashboard = [
  {
    title: "Profile",
    path: "/",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdIcons.MdSpaceDashboard />,
    cName: "nav-text",
  },
  {
    title: "Manage Teacher",
    path: "/manage-teacher",
    icon: <FaIcons.FaChalkboardTeacher />,
    cName: "nav-text",
  },
  {
    title: "Manage Student",
    path: "/manage-student",
    icon: <SiIcons.SiGoogleclassroom />,
    cName: "nav-text",
  },
  {
    title: "Manage Course",
    path: "/manage-course",
    icon: <MdIcons.MdLibraryBooks />,
    cName: "nav-text",
  },
  {
    title: "Manage Session",
    path: "/manage-session",
    icon: <MdIcons.MdLaptopChromebook />,
    cName: "nav-text",
  },
];
