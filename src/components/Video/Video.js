import React from 'react';
import './Video.css';


const Video = (props) => {
   if (!props.video) {
      return (
         <div className="video col-md-8" style={{backgroundColor: "blue" }}>
            動画を読み込み中です
         </div>
      );
   }

   //return内ではpropsの条件分岐は必要ないの？？
   const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;
   // debugger

      console.log(props.video)

   return (
      <div className="video col-md-8">
         <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={videoURL} title="selectedVideo"></iframe>
         </div>
         <div className="info">
            <h4 className="mt-2 font-weight-bold">{props.video.snippet.title}</h4>
            <p className="p-tag">{props.video.snippet.description}</p>
         </div>
      </div>
   );
}

export default Video;
