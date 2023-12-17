import React from 'react';

const Heading = ({text,className}) => {
  let jannat = text.replace("#","<span class='one'>").replace("#","</span>");
  
  return (
    <h1 className={className} dangerouslySetInnerHTML={{__html: jannat}}>
    </h1>
  );
};

export default Heading;