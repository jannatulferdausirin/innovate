import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Heading from '../Heading';
import Button from '../Button';
import Paragraph from '../Paragraph';
import logoTwo from '../../assets/Group 1000006797.png'
import Flex from '../Flex';
import bannerImg from '../../assets/images (7).png';



const Banner = () => {
    return (
        <Container className="mt-8">
         <Flex className="pt-16">
            <div className="">
            <div className="w-[686px]">
            <Image src={logoTwo} />
            <Heading
              text="We Are Digital #Marketing# Agency"
              as="h2"
              className="text-[72px] text-[#192239]  font-bold mt-[20px]"
            />
            <Paragraph 
              text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing."
              className="text-[20px]  text-[#6C7D93] w-[571px] leading-[36px] mb-[25px] mt-[25px]"
            />
            <Button
              text="get free quoto"
              className="text-[18px] font-semibold  capitalize text-white py-[20px] px-[40px] rounded-full"
            />
          </div>
            </div>
            <div>
          <Image  src={bannerImg} alt={bannerImg}/>
            </div>
         </Flex>
        </Container>
    
    );
  };
  
  export default Banner;