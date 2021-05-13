import React from 'react';
import Song from './song';
import './songs.style.css';


const SongType = (props) => {
    return(
        <React.Fragment key={0}>
        {
        props.songs.map((type, index)=> {
          return (
            <React.Fragment key={type.id}>
              <div className='type'>
                  {type.type}
              </div>
              <div>
                {
                    type.songs.map((song, index)=> {
                      return (
                          <React.Fragment key={song.id}>
                            <Song song={song}/>
                          </React.Fragment>
                      );
                    })
                }
              </div>
            </React.Fragment>
          );
          
        })
      }

    </React.Fragment>

    ); 
}

export default SongType;