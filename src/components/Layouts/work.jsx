import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Heading from '../Heading';
import Flex from '../Flex';
import logo from  '../../assets/Group 1000006797.png';
import workOne from  '../../assets/Image 3 (3).png'
import workTwo from  '../../assets/Image (1).png';
import workThree from  '../../assets/Image 3 (3).png';
import workFour from  '../../assets/Image 4 (1).png';
import workFive from  '../../assets/Image 1 (1).png';
import workSix from  '../../assets/Image 4 (1).png';
import Menu from './Menu';

const Work = () => {
    return (
     
        <Container>
          <div className="mx-auto text-center mb-[50px]">
            <Image src={logo} className="mx-auto" />
            <Heading text="Work Showcase" as="h3" className="my-[25px] mb-[45px] text-4xl font-bold font-openSans" />
            <Menu/>
          </div>
          <Flex className="gap-x-8 mb-8">
            <Image className="w-[276px] h-[344px]" src={workOne} />
            <Image className="w-[561px] h-[344px] rounded-2xl" src={workTwo} />
            <Image className="w-[270] h-[344px]" src={workThree} />
          </Flex>
          <Flex className="gap-8">
            <Image className="w-[413px] h-[432px]" src={workFour} />
            <Image className="w-[327px] h-[432px]" src={workFive} />
            <Image className="w-[370px] h-[432px]" src={workSix} />
          </Flex>
        </Container>
  
    );
  };
  
  export default Work;