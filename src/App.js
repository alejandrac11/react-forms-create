import { useState } from "react";
import './App.css';
import ArtistForm from "./components/Form/form-artist";
import SongForm from "./components/Form/form-songs";
import Gender from './components/gender/gender';
import SongType from "./components/songs/song-type";

let artistList = [
  {
    id: 'a1',
    name: 'Rock',
    artists: [
      {
        id: 'a1r1',
        name: 'Paul McCartney',
        gender: 'Male', 
        followers: 480000
      },
      {
        id: 'a1r2',
        name: 'Axl Rose',
        gender: 'Male', 
        followers: 90000000
      },
      {
        id: 'a1r3',
        name: 'Johan Jett',
        gender: 'Female', 
        followers: 51000000
      }
    ]
  },
  {
    id: 'a2',
    name: 'Metal',
    artists: [
      {
        id: 'a2r1',
        name: 'Alice Cooper',
        gender: 'Male', 
        followers: 48000000
      },
      {
        id: 'a2r2',
        name: 'James Hetfield',
        gender: 'Male', 
        followers: 510000000
      }
    ]
  }
];

let songsList = [
  {
    id: 's1',
    type: 'Rock',
    songs: [
      {
        id: 's1n1',
        name: 'No More Lonely', 
        streamings: 48560000
      },
      {
        id: 's2n1',
        name: 'Welcome to the Jungle',
        streamings:780900000 
        
      },
      {
        id: 's3n1',
        name: 'Cherry Bomb',
        streamings:60000000
      }
    ]
  },
  {
    id: 's2',
    type: 'Metal',
    songs: [
      {
        id: 's2n1',
        name: 'Poison',
        streamings: 780900000
        
      },
      {
        id: 's2n2',
        name: 'Motorbreath',
        streamings: 900000000
      }
    ]
  }
];

function App() {
  const [artists, setArtists] = useState(artistList);
  const [songs, setSongs] = useState(songsList);
 

  return (
    <div className="App">
      <div className='half'>
       <ArtistForm
       onAddArtist={(artistObj, genderType) =>{
        const newArtist = [];
        for(let i =0; i < artists.length; i++) {
          if(artists[i].id !== genderType) {
            newArtist.push(artists[i]);
          }else {
            newArtist.push(
              {
                ...artists[i], 
                artists:[...artists[i].artists, artistObj]
              }
            );
          }
        }
        setArtists(newArtist);
      }}


       />
        <Gender artists={artists}/>
        <br/>
        <br/>
        <SongForm
       onAddSong={(songObj, type) =>{
        const newSong = [];
        for(let i =0; i < songs.length; i++) {
          if(songs[i].id !== type) {
            newSong.push(songs[i]);
          }else {
            newSong.push(
              {
                ...songs[i], 
                songs:[...songs[i].songs, songObj]
              }
            );
          }
        }
        setSongs(newSong);
      }}


       />
        <SongType songs={songs}/>


      </div>
          

    </div>
  );
}

export default App;
