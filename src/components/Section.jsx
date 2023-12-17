import React, { Children } from 'react';

const Section = ({Children,className}) => {
    return (
        <div className={className}>
            {Children}
        </div>
    );
};

export default Section;