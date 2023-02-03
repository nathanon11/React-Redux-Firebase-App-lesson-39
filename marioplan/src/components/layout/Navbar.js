import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import lg from './22.png'

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
      <nav className="nav-wrapper green darken-3"> 
      <div className="container">
         < img src={lg} style={{display:'relative' ,width:'50px'}}></img> 
        <Link to='/Bighouse' className="brand-logo" >URS</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
   
        {/* //  <div className="container">    
        // <ul className="container">
        //  <nav class="navbar navbar-expand-lg navbar-light bg-light"> <img src={lg} style={{display:'relative' ,width:'10px'}}/> 
        //  <Link to='/' className="brand-logo">URS</Link>
        // {links}</nav>
        // </ul>
       */}
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo"><a href="index.html"> <img src={lg} style={{display:'relative' ,width:'10px'}}/> </a></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button> </nav> */}
          
        
       
          
     


