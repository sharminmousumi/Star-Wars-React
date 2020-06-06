import React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { actions } from '../Redux/Datapassing';
import './Ownfav.css';



const Ownfavrt = () => {
  let OwnMadeFavorite ={
    name:'',
    birth_year:'',
    eye_color:'',
    skin_color:'',
    
}
    const dispatch=useDispatch('');
    

    const [name, setName] = useState('');
    const [birth_year, setBirth] = useState('');
    const [eye_color, setEye] = useState('');
    const [skin_color, setSkin] = useState('');

      
    
    const handleChangeName = event => setName(event.target.value);
    const handleChangeBirth = event => setBirth(event.target.value);
    const handleChangeEye = event => setEye(event.target.value);
    const handleChangeSkin = event => setSkin(event.target.value);
    const Save = event =>{
      event.preventDefault();
      OwnMadeFavorite.name=name;
      OwnMadeFavorite.birth_year=birth_year;
      OwnMadeFavorite.eye_color=eye_color;
      OwnMadeFavorite.skin_color=skin_color;
      dispatch(actions.addToFavourite(OwnMadeFavorite))
    }
      
    return (
        <div className="container">
          <form onSubmit={Save}>
           <label>Name:</label><br/>
           <input type="text"   required placeholder="Name" value={name} onChange={handleChangeName}/><br/>
           <label>Birth-Year:</label><br/>
           <input type="number"  required placeholder="Birth-Year" value={birth_year} onChange={handleChangeBirth}/><br/>
           <label>Eye-Color:</label><br/>
           <input type="text"  required placeholder="Eye-Color" value={eye_color} onChange={handleChangeEye}/><br/>
           <label>Skin-Color:</label><br/>
           <input type="text"  required placeholder="Skin-Color" value={skin_color} onChange={handleChangeSkin}/><br/>
           <button type="submit" value="Submit">Submit</button>
           </form>
           
        
            
        </div>
    );
    
};

export default Ownfavrt;