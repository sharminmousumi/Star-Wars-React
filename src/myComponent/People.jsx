import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { actions } from '../Redux/Datapassing';
import './People.css';





const People = () => {
  const [people,setPeople]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const dispatch =useDispatch();
  const [sort, setSort]=useState("");

  
  useEffect(()=>{
    fetchPeople();
  }, [])

    const fetchPeople = async () => {
      let dataList = [];
       {
              let apiCall = await fetch('https://swapi.dev/api/people/');
              let data = await apiCall.json();
              let finalData=data.results;
              finalData.forEach(el => {dataList.unshift(el);
                console.log(finalData);
        });
      }
     
              setPeople(dataList)
              setLoading(false)
              setError(error)
           
   
    }
    if(error){
      return <div>error:{error.message}</div>
    }

    
      if(loading){
        return <div>Loading...</div>
      }
      const peopleData=people.map((xxx)=>{
        const addToFavourite=()=>dispatch(actions.addToFavourite(xxx))
        if(sort.length !== 0) {
          if (xxx.name.toUpperCase().match(sort.toUpperCase())
          ||(xxx.birth_year.toString().match(sort.toString()))
          ||(xxx.eye_color.toString().match(sort.toString()))
          ||(xxx.skin_color.toString().match(sort.toString()))
          ){
            return <div key={xxx.name}>
          <p>Name:{xxx.name}</p>
          <p>Birth-Year:{xxx.birth_year}</p>
          <p>Eye-color:{xxx.eye_color}</p>
          <p>Skin-color:{xxx.skin_color}</p>
          <button  onClick={addToFavourite}>Add To Favourite</button> 
        </div>
          }else{
            return null;
          }
        }
        
        return <div className="borderbox" key={xxx.name}>
          <p>Name:{xxx.name}</p>
          <p>Birth-Year:{xxx.birth_year}</p>
          <p>Eye-color:{xxx.eye_color}</p>
          <p>Skin-color:{xxx.skin_color}</p>
          <button  onClick={addToFavourite}>Add To Favourite</button> 
        </div>
      })
      return(
        <div>
          <form className="center">
          <input className="SearchProduct" type="text" placeholder="search..." value={sort} onChange={(event) => setSort(event.target.value)} />
          </form>
          <div className="favourite">{peopleData}</div>
        </div>
      );
       
      }

export default People;