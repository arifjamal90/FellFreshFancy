import React from 'react'
import './SkinPr.css'
import logo1 from '../../assets/image/asset 63.png'
import logo2 from '../../assets/image/asset 64.png'
import logo3 from '../../assets/image/asset 65.png'
import logo4 from '../../assets/image/asset 66.png'


const SkinPr = () => {
  return (
    <div className='container'>
      <div className="row">
      <div className="col-md-3 col-lg-3 col-sm-6 text-center ">
      <img src={logo1} alt="" className='logo1' />
      <p className='texthead'>Natural Skin Care</p>
      <p className='textcontent'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-6 text-center">
      <img src={logo2} alt=""  className='logo1'/>
      <p className='texthead'>Facial Product</p>
      <p className='textcontent'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>

      </div>
      <div className="col-md-3 col-lg-3 col-sm-6 text-center">
      <img src={logo3} alt=""  className='logo1'/>
      <p className='texthead'>Face Skin Care</p>
      <p className='textcontent'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>
      <div className="col-md-3 col-lg-3 col-sm-6 text-center">
      <img src={logo4} alt="" className='logo1'/>
      <p className='texthead'>Organic Skin Care</p>
      <p className='textcontent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="row">

     <div className="col-lg-12 col-sm-12 col-md-12">
   
     </div>

      </div>
      </div>
    </div>
  )
}

export default SkinPr
