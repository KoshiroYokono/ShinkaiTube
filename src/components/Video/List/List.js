import React from 'react';
import Item from '../Item/Item';
import './List.css';

const List = (props) => {

   // componentにおいて配列を処理するときは、propsでkeyを指定する
   const Items = props.videos.map((video) => {

      if(props.selectedVideo !== video) {
         console.log('クリア');
         return <Item video={video} key={video.id.videoId} onVideoClicked={props.onVideoClicked}/>;
      }
      return false;
   });

   return (
      <ul className="col-md-4 list-group">
         {Items}
      </ul>
   );
};

export default List;
