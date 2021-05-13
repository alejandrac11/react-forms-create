import { useState } from "react";
import './form-styles.css';


const ArtistForm = (props) => {
 
  const [genderType, setGenderType] = useState('a1');
  const [artistName, setArtistName] = useState('');
  const [artistGender, setArtistGender] = useState('Male');
  const [artistFollowers, setArtistFollowers] = useState('');

  const [artistNameValidation, setArtistNameValidation] = useState('');
  const [artistGenderValidation, setArtistGenderValidation] = useState('');
  const [artistFollowersValidation, setArtistFollowersValidation] = useState('');

  let validate = true;
  const addArtist = () => {
  
    console.log('Name: ' + artistName);
    console.log('Gender: ' + artistGender);
    console.log('Followers: ' + Number(artistFollowers));
    
    if(artistName == null || artistName ==''){
        validate = false;
        setArtistNameValidation("Artist Name Required");
    }else {
        setArtistNameValidation("");
    }

    if(artistGender == null || artistGender ==''){
        validate = false;
        setArtistGenderValidation("Gender Required");
    }else {
        setArtistGenderValidation("");
    }

    if(artistFollowers == null || artistFollowers <= 0){
        validate = false;
        setArtistFollowersValidation("Incorrect Number");
    }else {
        setArtistFollowersValidation("");
    }
    
    if(validate == true){
        const newArtist = {
            id: artistName,
            name: artistName,
            gender: artistGender,
            followers: Number(artistFollowers)
          };
        
        props.onAddArtist(newArtist, genderType);
    }
     
  }

    return (
        <div>
        <select value={genderType} onChange={(event)=> {setGenderType(event.target.value)}} >
          <option value="a1">Rock</option>
          <option value="a2">Metal</option>
        </select>
        <input type='text' value={artistName} onChange={(event)=> {setArtistName(event.target.value)}} placeholder='Artist Name'/>
        <select value={artistGender} onChange={(event)=> {setArtistGender(event.target.value)}} >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type='number' value={artistFollowers} onChange={(event)=> {setArtistFollowers(event.target.value)}} placeholder='Artist Followers'/>
        <span className='validation'>{artistNameValidation}</span>
        <span className='validation'>{artistGenderValidation}</span>
        <span className='validation'>{artistFollowersValidation}</span>
        
        <button type='button' onClick={addArtist}>Add Artist</button>

      </div>
    );
}

export default ArtistForm;