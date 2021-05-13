import React from 'react';
import Artist from '../artist/artist';
import './gender.style.css';


const Gender = (props) => {
    return(
        <React.Fragment key={0}>
            {
            props.artists.map((gender, index)=> {
              return (
                <React.Fragment key={gender.id}>
                  <div className='gender'>
                      {gender.name}
                  </div>
                  <div>
                    {
                        gender.artists.map((artist, index)=> {
                          return (
                              <React.Fragment key={artist.id}>
                                <Artist artist={artist}/>
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

export default Gender;