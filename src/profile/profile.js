import React from 'react'
import PropTypes from "prop-types";


function Profile({fullName, bio, profession, children}) {



    
    const handleClick = (e) => {
        e.preventDefault();
        alert(fullName);
    };

    return(
        <div className = "container d-flex justify-content-center" >
            <div className="card" style = {{width: "30%", textAlign: "center"}}>
                {children}
                <div className="card-body">
                    <h5 className="card-title">{fullName}</h5>
                    <h5 className="card-title">{profession}</h5>
                    <p className="card-text">{bio}</p>
                    <a href="#" className="btn btn-primary" onClick = {handleClick} >Click Me</a>
                </div>
            </div>
        </div>
    );
}

Profile.defaultProps = {
    fullName: "username",
    profession: "Profession",
    bio : "this is the user's bio"
    }

    Profile.propTypes  = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
    }



export default Profile