import React from 'react';
// import {Link} from 'react-router-dom';
import './TrackListItem.css';

function TrackListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{props.track.company}</h3>
      </div>
      <div className='panel-footer TrackListItem-action-panel'>
        
      </div>
    </div>
  );
}

export default TrackListItem;