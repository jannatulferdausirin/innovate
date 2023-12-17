import React from 'react';

const List = ({text,href,className}) => {
    return (
        <div>
          <ul>
          <li className={`${className}:  hover:text-orange-500`}><a href={href}>{text}</a></li> 
          </ul>
        </div>
    );
};

export default List;