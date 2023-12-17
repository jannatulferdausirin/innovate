import React from 'react';
import logo from '../../assets/Group 1000006797.png';
import weAreImage from '../../assets/images (7).png';
import weAreImageTwo from '../../assets/partner logo.png';
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import Image from '../Image';
import Paragraph from '../Paragraph';


const WhoWeAre = () => {
    return (
    
          <Container className="my-[100px]">
            <Flex className="justify-between">
              <Image className="w-[542px] h-[545px] " src={weAreImage} />
              <div className="w-[470px] h-[487px]">
                <Image className="pb-4" src={logo} />
                <Paragraph text="Who We Are" className="font-bold text-4xl py-4 font-openSans "/>

               <Paragraph text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified" className="font-bold mt-12"/>
              
                <Image className="mt-16" src={weAreImageTwo}  />
              </div>
            </Flex>
          </Container>
   
      );
    };

export default WhoWeAre;