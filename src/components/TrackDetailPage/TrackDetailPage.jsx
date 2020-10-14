import React from 'react';
import TrackCard from '../../components/TrackCard/TrackCard';

function TrackDetailPage(props) {
 // Refer to PuppyListItem to see how puppy is being passed via the <Link>
 const track = props.location.state.track;
 return (
   <>
     <h1>Job Track Details</h1>
     <TrackCard
       key={track._id}
       track={track}
     />
   </>
 );
}
export default TrackDetailPage;