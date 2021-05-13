import React from 'react';
import './artist.style.css';


const Artist = (props) => {
    return(
        <React.Fragment key={props.artist.id}>
            <div className='artist'>   
            
                     <strong>Name</strong>: {props.artist.name}
                    <br/>
                    <strong>Gender</strong>: {props.artist.gender}
                     <br/>
                     <strong>Followers</strong>: {props.artist.followers}
                
            
            
            </div>
        </React.Fragment>

    ); 
}

export default Artist;