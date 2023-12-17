import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Group 1000006797.png";
import Paragraph from "../Paragraph";
import List from "../List";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <Container className="my-16">
      <Flex className="grid grid-cols-5 text-gray-500 font-Nunito">
        <div className="col-span-2 pe-4">
          <Image className="mb-4" src={logo} />
          <Paragraph className="mt-4" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." />
        </div>
        <div className="mt-4">
            <Paragraph className="text-black text-2xl font-bold font-openSans my-4" text="Features" />
            <List className="" text=" Home"/>
            <List text=" About"/>
            <List text=" Pricing"/>
            <List text=" Benefit"/>
            <List text=" Blog"/>
        </div>
        <div className="mt-4">
            <Paragraph  className="text-black text-2xl font-bold font-openSans my-4"  text="Products" />
            <List text=" Task Management"/>
            <List text=" Company Growth"/>
            <List text=" Time tracking"/>
            
        </div>
        <div className="mt-4">
            <Paragraph  className="text-black text-2xl font-bold font-openSans my-4"  text="Supports" />
            <List text="Customer Service"/>
            <List text=" Accessibility"/>
            <List text=" Contact Us"/>
           
        </div>
      </Flex>
      <SubFooter/>
    </Container>
  );
};

export default Footer;
