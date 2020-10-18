import React from "react";
import "./TrackListPage.css";
import TrackListItem from "../TrackListItem/TrackListItem";

function TrackListPage(props) {

  


  return (
    <>
    
      <h1 className="mytracklist">My Job List</h1>
      <div className="TrackListPage-grid">
        {props.tracks.map(track => (
          <TrackListItem track={track} key={track._id}
          handleDeleteTrack={props.handleDeleteTrack} />
        ))}
      </div>
    </>
  );
}
export default TrackListPage;