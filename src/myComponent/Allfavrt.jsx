import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch} from 'react-redux';
import { actions } from '../Redux/Datapassing';
import './AllFav.css';


const Allfavrt = () => {
    const dispatch=useDispatch('');
    const favouritedata = useSelector((state) => state.Datapassing);
    
    const peopleData=favouritedata.map((xxx)=>{ 
        return <div className="borderbox" key={xxx.name}>
          <p> Name:{xxx.name}</p>
          <p>Birth-Year:{xxx.birth_year}</p>
          <p>Eye-color:{xxx.eye_color}</p>
          <p>Skin-color:{xxx.skin_color}</p>
          <button onClick={() => dispatch(actions.deleteFavourite(xxx.name))}>Delete</button> 
        </div>
      })
      
    
      return(
        <div>
          <div className="all_fab">
            {peopleData}
            </div>
          
        </div>
      );
       
    
    
};


export default Allfavrt;




	