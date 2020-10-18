import React from 'react';
import './TrackListItem.css';
import { Link } from 'react-router-dom'


function TrackListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>Company: {props.track.company}</h3><br></br>
        <h3 className='panel-title'>Title: {props.track.title}</h3><br></br>
        <h3 className='panel-title'>Next Step: {props.track.nextStep}</h3>
        
      </div>
      <div className='panel-footer TrackListItem-action-panel'>
      <Link
 className='btn btn-xs btn-success'
 to={{
   pathname: '/details',
   state: {track: props.track}
 }}
>
 DETAILS
</Link>
<Link
 className='btn btn-xs btn-info'
 to={{
   pathname: '/edit',
   state: {track: props.track},
 }}
>
 EDIT
</Link>
<button
 className="btn btn-xs btn-danger margin-left-10"
 onClick={() => props.handleDeleteTrack(props.track._id)}
>
 DELETE
</button>
      </div>
    </div>
  );
}

export default TrackListItem;