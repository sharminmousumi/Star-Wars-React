import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (
        
     <nav>
         <ul className="navlink">
             <Link className="Link" to="/">Home</Link>
             <Link className="Link" to="/people">People</Link>
             <Link className="Link" to="/allfavrt">All Favourite</Link>
             <Link className="Link" to="/Ownfavrt">Own Favourite</Link>
            
         </ul>
            
    </nav>
        
    );
};

export default Navigation;