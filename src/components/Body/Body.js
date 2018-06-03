import React from 'react';

const Body = (props) => {
   return (
      <div className="container">
         <div className="row">
            {props.children}
         </div>
      </div>
   );
};

export default Body;
