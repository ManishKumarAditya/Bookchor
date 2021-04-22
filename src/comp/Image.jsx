import React from 'react';

// import img1 from './images/manish.jpg';

const Image= ()=>{
    return(
<div id="imageslider" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
      
    <div class="carousel-item active">
      <img src="./images/slide1.jpeg" class="d-block w-100" alt=""></img>
    </div>
      
    <div class="carousel-item">
      <img src="./images/slide2.jpeg" class="d-block w-100" alt="" ></img>
    </div>
       
    <div class="carousel-item">
      <img src="./images/slide3.jpeg" class="d-block w-100" alt="" ></img>
    </div>
       
    <div class="carousel-item">
      <img src="./images/slide4.jpeg" class="d-block w-100" alt="" ></img>
    </div>
       
    <div class="carousel-item">
      <img src="./images/slide5.jpeg" class="d-block w-100" alt="" ></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#imageslider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#imageslider" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}
export default Image;