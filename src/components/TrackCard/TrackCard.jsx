import React from 'react';
import {Link} from 'react-router-dom';

function TrackCard({track}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{track.company}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Title</dt>
          <dd>{track.title}</dd>
          <dt>Date Applied</dt>
          <dd>{track.dateApplied}</dd>
          <dt>Location</dt>
          <dd>{track.location}</dd>
          <dt>Level</dt>
          <dd>{track.level}</dd>
          <dt>Next Step</dt>
          <dd>{track.nextStep}</dd>
          <dt>Application Status</dt>
          <dd>{track.applicationStatus}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
        
        
        
      </div>
    </div>
  );
}

export default TrackCard;