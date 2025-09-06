import { Slider } from '@mui/material'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'



function LandingPage() {
  const settings={
    dots: true,
    infinite:true,
    speed:500,
    sliderToShadow:3,
    slideToScroll:1
  }
  return (
    <>
  <section >
         <div className='container-fluid'  style={{  backgroundImage:'url("https://ik.imagekit.io/ye/tr:w-1170/production/uploads/components/homepage/top-section/header-EN.jpg")' , height:'100vh' ,backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',}}>
       <h1 style={{fontWeight:"900",marginLeft:"100px",color:'rgb(4, 95, 102)',paddingTop:"90px"}} > Your online yoga studio</h1>
       <p style={{width:"400px"    ,marginLeft:"100px",fontWeight:"400"}}>We believe in the power of yoga to heal, empower, and connect. Wherever you are on your journey, come as you are and let’s take it together.</p>
    </div>
  </section>
  <section className=' my-5 text-center ' style={{color:'rgb(4, 95, 102)',height:"100vh"}}>
<h1 style={{fontWeight:"700"}}> Classes for every level and need</h1>
<p className='text-dark'>Whether you’re a beginner or long-term practitioner, whether you just want to move your body or learn how it moves, you're welcome just as you are.</p>
<div >
{/* Image Slider for Classes 🎞 */}
<Parallax pages={2}  style={{height:"400px",marginBottom:"0px"}}>
<ParallaxLayer offset={1} factor={1} speed={0}> <img src="https://ik.imagekit.io/ye/tr:w-1170/production/uploads/components/homepage/programs-section/3-week-Yoga-workout.jpg" alt="" /></ParallaxLayer>
{/* <ParallaxLayer  offset={0} factor={0} speed={0} >   <img src="https://ik.imagekit.io/ye/tr:w-1170/production/uploads/components/homepage/programs-section/21-mornings-with-Yoga.jpg" alt="" /></ParallaxLayer> */}
<ParallaxLayer offset={0.25} factor={0.5}  speed={0.5}> <img src="https://ik.imagekit.io/ye/tr:w-1170/production/uploads/components/homepage/programs-section/Just-Yin-Yoga.jpg" alt="" /></ParallaxLayer>

{/* <ParallaxLayer offset={2}   factor={3} speed={1}>   <img src="https://ik.imagekit.io/ye/tr:w-1170/production/uploads/components/homepage/programs-section/Yoga-for-beginners.jpg" alt="" /></ParallaxLayer> */}

</Parallax>
</div>
  </section>
<section>
  {/* Instructor Cards 👩‍🏫 */}
  {/* image foryoga class */}
{/* <div className="w-3/4 m-auto">
<div className="mt-20">
  <Slider {...settings}>
{
  data.map((d)=>(
    <div className='bg-white h-[450px] text-black rounded-xl'>
    <img src="" alt="" />
    </div>
  ))
} */}
  {/* </Slider>
  </div>
  </div> */}

</section> 

  <section className='row container-fluid'>
    <img className='col-6' src="https://ik.imagekit.io/ye/tr:w-676/production/uploads/components/mobile-app-section/app-banner-desktop-EN.jpg" alt="" />

<div className='container  col-6 py-5 text-align-center' style={{backgroundColor:"rgb(226, 242, 252)"}}>    
  <h2>Yoga in your pocket!</h2>
<p  style={{width:"400px" }}>
  Whether at home or on the go, practice anytime, anywhere with our app. Download your favourite classes for offline use.
  
</p>   
 <div>
</div> 
<div className='row ' >
  
       <div className="col-1"></div>
            <img className='col-3' height={'50px'} src="https://ik.imagekit.io/ye/tr:w-300/production/uploads/components/appstore-buttons/app_appstore_en.png" alt="" />
            <div className="col-2"></div>
            <img className='col-3' height={'50px'} src="https://ik.imagekit.io/ye/tr:w-300/production/uploads/components/appstore-buttons/app_googleplay_en.png" alt="" />
            <div className="col-4"></div>
</div>
  
 </div>
      

  </section>
    </>
  )
}

export default LandingPage