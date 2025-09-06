import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SampleNextArrow from '../components/SampleNextArrow';
import SamplePrevArrow from '../components/SamplePrevArrow';

function LandingPage() {
   const dataS = [
  {
    img:"https://i.pinimg.com/1200x/2f/82/2e/2f822eb1965ee61d8318dd8d0e6311bb.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/63/6f/2a/636f2aa74746f9603d906e70dd9f03a5.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/aa/56/3a/aa563afa6c34ec3c2e0182a53fc3248f.jpg"
  }
  ,
  {
    img:"https://i.pinimg.com/736x/6f/9d/b4/6f9db4dd2be2fa3de32b2b370d8591ed.jpg"
  },



  {
    img:"https://i.pinimg.com/736x/42/17/51/421751e8debff4b83928415e13476bad.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/57/f0/15/57f0155412b8b9e8bdd580338c8919d5.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/7f/d8/61/7fd86174f6b02b30b27560a212957249.jpg"
  }
  ,
  {
    img:"https://i.pinimg.com/736x/57/27/f8/5727f85218a6cc4a91dd2ac44b53d765.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/2e/d6/6b/2ed66b0c84f3a01f62ba347b2824b4bf.jpg"
  }
 ]

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     arrows: true ,
      nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
  };

  
  return (
    <>
  <section >
         <div className='container-fluid'  style={{  backgroundImage:'url("https://ik.imagekit.io/ye/tr:w-1170/production/uploads/components/homepage/top-section/header-EN.jpg")' , height:'100vh' ,backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',}}>
       <h1 style={{fontWeight:"900",marginLeft:"100px",color:'rgb(4, 95, 102)',paddingTop:"90px"}} > Your online yoga studio</h1>
       <p style={{width:"400px"    ,marginLeft:"100px",fontWeight:"400"}}>We believe in the power of yoga to heal, empower, and connect. Wherever you are on your journey, come as you are and let’s take it together.</p>
    </div>
  </section>
<section  className='mt-5  text-center ' style={{color:'rgb(4, 95, 102)',height:"100vh"}}>
  <h1 style={{fontWeight:"700"}}>Move, Breathe, and Recharge</h1>
<p className='text-dark'> Discover practices that awaken your energy in the morning, reset your focus during the day, and bring you peace at night.</p>

<div className="slider-container container mb-5">
      <Slider {...settings}>
  {dataS.map((d, i) => (
    <div key={i} className="d-flex justify-content-center">
      <img src={d.img} alt='images' style={{ width: "300px", height: "400px" }} className='rounded-5'/>
    </div>
  ))}
</Slider>
    </div>


</section> 

  <section className=' text-center ' style={{color:'rgb(4, 95, 102)',height:"100vh"}}>
<h1 style={{fontWeight:"700"}}>  Classes for every level and need </h1>
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



<section 
  className="text-center"  
  style={{ color: 'rgb(4, 95, 102)', height: "100vh" }}
>
  <h1 className="mb-5">Meet Our Teachers</h1>

  <Parallax pages={3} style={{ height: "300px" }}>
    
    <ParallaxLayer offset={0} speed={0.3}>
      <div className="d-flex justify-content-center gap-5">
        <img 
          src="https://img.freepik.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg" 
          alt="Teacher 1" 
          className="teacher-img"
        />
        <img 
          src="https://img.freepik.com/free-photo/smiling-brunette-woman-with-crossed-arms-looking-camera-gray_171337-987.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Teacher 2" 
          className="teacher-img"
        />
        <img 
          src="https://media.istockphoto.com/id/661799106/photo/portrait-of-a-young-french-man.jpg?s=612x612&w=0&k=20&c=M-8ccbYQZCvQWmKLLyDF5mYjF3KaBTQwX6HDdzvw_pk=" 
          alt="Teacher 3" 
          className="teacher-img"
        />
      </div>
    </ParallaxLayer>

 
    <ParallaxLayer offset={1} speed={0.4}>
      <div className="d-flex justify-content-center gap-5">
        <img 
          src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_incoming&w=740&q=80" 
          alt="Teacher 4" 
          className="teacher-img"
        />
        <img 
          src="https://media.istockphoto.com/id/1272208623/photo/look-at-ads-here-portrait-of-handsome-happy-man-in-stylish-denim-shirt-pointing-aside-showing.jpg?s=612x612&w=0&k=20&c=tl3TgfcmKdk3aRsxPLsqVMptq0piNH6hNHY__Y1Qe4U=" 
          alt="Teacher 5" 
          className="teacher-img"
        />
        <img 
          src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=" 
          alt="Teacher 6" 
          className="teacher-img"
        />
      </div>
    </ParallaxLayer>

   
    <ParallaxLayer offset={2} speed={0.5}>
      <div className="d-flex justify-content-center gap-5">
        <img 
          src="https://www.shutterstock.com/image-photo/young-brazilian-man-isolated-on-260nw-2242569333.jpg" 
          alt="Teacher 7" 
          className="teacher-img"
        />
        <img 
          src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" 
          alt="Teacher 8" 
          className="teacher-img"
        />
        <img 
          src="https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg" 
          alt="Teacher 9" 
          className="teacher-img"
        />
      </div>
    </ParallaxLayer>

  </Parallax>
</section>



  <section className='row container-fluid ' >
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