import React from 'react';
// import {Link} from 'react-router-dom';
import './TrackListItem.css';
import { Link } from 'react-router-dom'

function TrackListItem(props) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{props.track.title}</h3>
      </div>
      <div className='panel-footer TrackListItem-action-panel'>
      <Link
 className='btn btn-xs btn-info'
 to={{
   pathname: '/details',
   state: {track: props.track}
 }}
>
 DETAILS
</Link>
<Link
 className='btn btn-xs btn-warning'
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