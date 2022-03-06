import React from 'react'
import { CssBaseline, Grid, Typography , Paper, Button, Box} from '@mui/material'
import { color, textAlign } from '@mui/system'
import EventNoteIcon from '@mui/icons-material/EventNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HomeHeader = () => {
  return (
    <> 
    <div //first div 
        style={{
            height:'100vh',
            display:'flex', 
            alignItems:'center',
            justifyContent:'space-around', 
            backgroundColor:'white', 
            marginTop:'1%'
            }}
        >
         <Grid
            container
            component="main"
            style={{
                width:'100%',
                justifyContent:"center",
                margin:'50px',
            }}
         >
        <CssBaseline/>
        <Grid 
             item
             xs={8}
             sm={6}
             md={7}
             component={Paper}
             elevation={8}
             square
             style={{
                 boxShadow:'none'                 
             }}
            //  font-family: 'Quicksand', sans-serif;
             >
             <Box  sx={{justifyContent:"center",margin:'60px'}}>
              <Typography 
                   style={{ 
                     backgroundColor:'#DDD4D1', 
                     width:'300px', 
                     height:'35px', 
                     borderRadius:'20px', 
                     justifyContent:'center', 
                     textAlign:'center', 
                     marginTop:'5px',
                     }}
                     >
                     100% Trusted Platform in the India
              </Typography>
              <Typography 
                   style={{
                     fontSize:'65px', 
                     margin:'0' , 
                     color:"#0B2060",  
                     fontFamily:'Quicksand,sans-serif', 
                     fontWeight:"600"
                     }}
                     >Experince a learning platform that take you next level
              </Typography>
              <Typography 
                   style={{
                     fontSize:'20px', 
                     margin:'10px',
                     fontFamily:'Quicksand,sans-serif', 

                     }}
                     >
                     There are many variation of pasages of avaliable but the majority have suffered
              </Typography>

              <Button
                style={{
                  height:'50px',
                  backgroundColor:'#5913B0',
                  borderRadius:'50px',
                  color:'white',
                  width:'130px',
                  outline:'none'
                  
                }}
              >Get started</Button>
              </Box>
             </Grid>



        <Grid 
           item 
           sm={6}
           md={4}
           margin={2}
           sx={{
            backgroundImage:
                "url(https://www.pngitem.com/pimgs/m/57-574351_nursery-school-student-png-transparent-png.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            
           }}
           />
           
         </Grid>
      
    </div>

    {/* second header */}
    <div>
       <Box style={{height:'60vh', backgroundColor:'#0B2060', }}>
           <Box style={{ textAlign:'center'}}>
             <Typography style={{ fontSize:'50px', color:'white',fontFamily:'Quicksand,sans-serif'}}>Our Services for you</Typography>
             <Typography style={{ fontSize:'20px', color:'white'}}>There are many variation of passages avaliable homorouse  of randomised  Lorem beliavable.</Typography>
           </Box>
          
           <Box style={{ margin:'80px', display:'flex', color:'white'}}> 
              <Box ml={8} >
                 <Box sx={{display:'flex'}}>
                   <EventNoteIcon/>
                      <Typography sx={{fontSize:'20px'}}>Flexible Time Schedule</Typography>
                 </Box>
                   <Typography>There are many variation of  passagesof Lorem avalible , but the majority alteration in form</Typography>
            </Box>

              <Box ml={8}>
                <Box sx={{display:'flex'}}>
                   <EventNoteIcon/>
                    <Typography sx={{fontSize:'20px'}}>Flexible Time Schedule</Typography>
                </Box>
                 <Typography>There are many variation of  passagesof Lorem avalible , but the majority alteration in form</Typography>
              </Box>

              <Box ml={8}>
                <Box sx={{display:'flex'}}>
                  <EventNoteIcon/>
                    <Typography sx={{fontSize:'20px'}}>Flexible Time Schedule</Typography>
                 </Box>
                  <Typography>There are many variation of  passagesof Lorem avalible , but the majority alteration in form</Typography>
                 </Box>
           </Box>
       </Box>
    </div>

   <div>

   <Box sx={{backgroundColor:'white', margin:'80px', height:'90vh', display:'flex'}}>
     <Grid 
        item 
        xs={6}
        md={7}
        style={{
          margin:'80px'
        }}
        
        >
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/online-education-1804689-1530107.png'>

        </img>
           
     </Grid>
     <Grid 
        item
        xs={6}
        md={8}
        style={{ 
          margin:'80px'
        }}
        >
        <Typography variant='h2'>Bebifit of online Learning</Typography>
        <Typography variant='h5'>There are many variation of passages of Lorem ipsum availible
                 but the majority have suffered alteration in some form by look slightly believable
        </Typography>

        <Box sx={{display:'flex', margin:'50px'}}>
            <Typography margin={1}><EventNoteIcon/> Beginer Level</Typography>
            <Typography margin={1}><EventNoteIcon/> Beginer Level</Typography>
            <Typography margin={1}><EventNoteIcon/> Beginer Level</Typography>
            <Typography margin={1}><EventNoteIcon/> Beginer Level</Typography>

        </Box>
        <Button variant='contained'>Get Started</Button>
          
     </Grid>
   </Box>

   </div>

   <div>
     <Box sx={{backgroundColor:"white", height:'60vh',display:'flex', marginTop:'70px', marginLeft:'80px'}}>
       <Grid
          item
          xs={5}
          md={8}
          margin={3}
       >
        <Typography variant='h3'>Track your study activity</Typography>
        <Typography variant='h6'>There are variation of pasages availible homourous of randomised Lorem Ipsum beliavable</Typography>
        
        <Box marginTop={4} >
          <Typography><CheckCircleIcon/>Well Educated Staff</Typography>
          <Typography><CheckCircleIcon/>Well Educated Staff</Typography>
          <Typography><CheckCircleIcon/>Well Educated Staff</Typography>

        </Box>
        <Button variant='contained'>Explore Courses</Button>
        

       </Grid>
       <Grid
         item
         xs={5}
         md={8}
       >
         
      
      </Grid>
     </Box>
   </div>
  
    <div style={{ height:'40vh', backgroundColor:'darkblue',textAlign:'center'}}>
      <Box>
        <Typography variant='h2'>What student say about us ?</Typography>
        <Typography variant='h6'>There are many of passages availible humourouse of randomised Loreum Ipsum beliavable</Typography>

      </Box>
    </div>


    </>
  )
}

export default HomeHeader