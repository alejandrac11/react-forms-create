import { useState } from "react";
import './form-styles.css';


const SongForm = (props) => {
 
  const [songType, setType] = useState('s1');
  const [songName, setSongName] = useState('');
  const [songStreamings, setSongStreamings] = useState('');

  const [songNameValidation, setSongNameValidation] = useState('');
  const [songStreamingsValidation, setSongStreamingValidation] = useState('');

  let validate = true;
  const addSong = () => {
  
    console.log('Name: ' + songName);
    console.log('Streamings: ' + Number(songStreamings));
    
    if(songName == null || songName ==''){
        validate = false;
        setSongNameValidation("Song Required");
    }else {
        setSongNameValidation("");
    }

    if(songStreamings == null || songStreamings <= 0){
        validate = false;
        setSongStreamingValidation("Incorrect Number");
    }else {
        setSongStreamingValidation("");
    }
    
    if(validate == true){
        const newSong = {
            id: songName,
            name: songName,
            streamings: Number(songStreamings)
          };
        
        props.onAddSong(newSong, songType);
    }
     
  }

    return (
        <div>
        <select value={songType} onChange={(event)=> {setType(event.target.value)}} >
          <option value="s1">Rock</option>
          <option value="s2">Metal</option>
        </select>
        <input type='text' value={songName} onChange={(event)=> {setSongName(event.target.value)}} placeholder='Song Name'/>
        <input type='number' value={songStreamings} onChange={(event)=> {setSongStreamings(event.target.value)}} placeholder='Song Streamings'/>
        <span className='validation'>{songNameValidation}</span>
        <span className='validation'>{songStreamingsValidation}</span>
        
        <button type='button' onClick={addSong}>Add Song</button>

      </div>
    );
}

export default SongForm;