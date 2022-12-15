import React from "react";
import "./card.scss";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Card = ({ title, poster_path, overview, vote_average,vote_count,release_date }) => {
	
  return (
    <div >
      <figure className="image-block m-3 "  >
	<h5 className=" rounded-circle float-left ">{vote_average}</h5>
	<img  src={
        poster_path
          ? IMG_API + poster_path
          : "https://images.unsplash.com/photo-1538152911114-73f1aa6d6128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
	 } alt="" type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" />
	<figcaption  >
		<p className=" text-uppercase text-dark text-center">
			{title}
		</p>
		
	</figcaption>
</figure>  
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
	<div class="container">
	<div class="row">
		<div class="col-6 col-sm-3 col-md-3">
			<img src={	IMG_API + poster_path} style={{width: '120%', height: '15rem'}} alt="" />
		</div>
		<div class="col">
			<p className=" text-uppercase text-dark ">
			<b>Release Date :</b>{release_date}
		</p>
		<p className=" text-uppercase text-dark ">
			{overview}					
		</p>
		<p> {vote_average}/10 ( {vote_count} total votes) </p>
		</div>
	</div>
</div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Card;