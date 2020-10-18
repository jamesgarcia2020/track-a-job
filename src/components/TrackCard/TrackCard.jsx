import React from 'react';
import {Link} from 'react-router-dom';
import './TrackCard.css';



function TrackCard({track}) { 
 
 
  
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{track.company}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Title:</dt>
          <dd>{track.title}</dd><br></br>
          <dt>Date Applied:</dt>
          <dd>{track.dateApplied}</dd><br></br>
          <dt>Location:</dt>
          <dd>{track.location}</dd><br></br>
          <dt>Link:</dt>
          
          <a className="btn btn-outline-primary" href={track.level} rel="noopener noreferrer" role="button" alt="link" target="_blank">{track.level}</a><br></br><br></br>
          <dt>Next Steps:</dt>
          <dd>{track.nextStep}</dd><br></br>
          <dt>Important Notes/Conversations:</dt>
          <dd>{track.applicationStatus}</dd><br></br><br></br><br></br><br></br>
        </dl>
        
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
        
        
        
      </div>
    </div>
  );
}

export default TrackCard;