import React from 'react';
import './songs.style.css';


const Song = (props) => {
    return(
        <React.Fragment key={props.song.id}>
            <div className='song'>   
            
                     <strong>Name</strong>: {props.song.name}
                     <br/>
                     <strong>Streamings</strong>: {props.song.streamings}
                
            </div>
        </React.Fragment>

    ); 
}

export default Song;