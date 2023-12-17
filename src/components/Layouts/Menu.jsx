import React from 'react';
import Flex from '../Flex';
import List from '../List';
import Container from '../Container';

const Menu = () => {
    return (
       <Container>
        <Flex className="gap-20 font-openSans text-xl text-semibold mt-8" >
            <List text="All" className=""/>
            <List text="Digital Mkt" className=""/>
            <List text="Branding" className=""/>
            <List text="Content Mkt" className=""/>
            <List text="Social Media Mkt" className=""/>
           
        </Flex>
       </Container>
    );
};

export default Menu;