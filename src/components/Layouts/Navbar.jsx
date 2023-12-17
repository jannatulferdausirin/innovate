import React from 'react';
import List from '../List';
import Button from '../Button';
import Image from '../Image';
import logo from '../../assets/Logo (5).png'
import Container from '../Container';
import Flex from '../Flex';
import bannerImg from '../../assets/Banner.jpg'

const Navbar = ({text,className,href}) => {
    return (
        <div>
       <Container>
        <Flex className="justify-between pt-4 font-openSans text-lg font-semibold" >
        <Image src={logo} alt={logo}/>
        <ul className="flex gap-[40px] text-center items-center ">
          <List  text="Home"></List>
          <List  text="About"></List>
          <List  text="Service"></List>
          <List  text="Portfolio"></List>
          <List text="Price"></List>
          <List  text="Blog"></List>
        </ul>
        <Button className=" " text="Contact Us"/>
        </Flex>
       </Container>
      </div>
    );
};

export default Navbar;