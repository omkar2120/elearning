import React from 'react'
import { Container,Box,Toolbar,List,ListItem,Drawer,AppBar, Typography, Button, ListItemIcon, Divider, listClasses  } from '@mui/material'
import { margin, width } from '@mui/system'
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import StudNav from './StudNav';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
const drawerWidth = 280;

const useStyles = makeStyles({
  drawerPaper: {
    marginTop: "80px",

  }
});

// const useStyles = makeStyles((theme) => ({
//   menuButton:{
//     marginRight:theme.spacing(2)
//   },
//   title:{
//     marginRight:'auto'
//   },
//   drawer:{
//     width:300,
//     marginTop:100,
//   },
//   iconAlign:{
//     marginLeft:100
//   },
//   ListItem:{
//     marginTop:10
//   },
//   content:{
//     padding:theme.spacing(9)
//   }
// }))

const StudSidebar = () => {

  const classes = useStyles();

   
  const listItems = [
    {
      icon:<HomeIcon/>,
      name:"Dashboard",
      
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },
    {
      icon:<HomeIcon/>,
      name:"Home",
    },

    
  ]


  // const classes = useStyles();
  return (
    <div>
     <Container>
       <Drawer variant="permanent" anchor='left' classes={{
    paper: classes.drawerPaper
  }}
         sx={{width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
          },
          }}>
         <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVzfQ0dNV81i_D80HcVsJg-QUF4YGb0oqig&usqp=CAU" sx={{height:'130px', width:'130px',marginLeft:'60px'}} />

         <Box sx={{ display:'flex', justifyContent:'space-between', fontWeight:'500'}} >

           <Typography>
             <Box mt={1}>
               Hello 
             </Box>
             <Box ml={6} fontSize={21}>
                 Anshika Madan
             </Box>
           </Typography>
         </Box>
         {/* <Divider/> */}
         <Box>
           {listItems.map((items) => (
             <Box sx={{ display:'flex'}}>
             <ListItem button>
                <ListItemIcon>{items.icon}</ListItemIcon>
                <ListItem>{items.name}</ListItem>
              </ListItem>
             </Box>
           ))}
         </Box>
       </Drawer>
     </Container>
    </div>
  )
}

export default StudSidebar


{/* <ListItem button spacing={2} >
<ListItemIcon></ListItemIcon>
<Box pl={1} type="paragraph" color="inherit">
  
</Box>
</ListItem> */}