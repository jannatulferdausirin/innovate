import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Flex from '../Flex';
import serviceImageLogo from '../../assets/Group 1000006797.png'
import serviceImageOne from '../../assets/results 1.png'
import serviceImageTwo from '../../assets/social-marketing 1 (1).png'
import serviceImageThree from '../../assets/social-media 1 (1).png'
import Anchor from '../Anchor';


const Service = () => {
    return (
     
        <Container className="my-8">
          <div className="text-center mx-auto w-[317px] mb-[50px]">
            <Image src={serviceImageLogo} className="mx-auto" />
            <Heading as="h3" text="Our Services" className="font-bold text-4xl py-4 font-openSans"/>
            <Paragraph
              text="We have been providing great flooring solutions service."
              className="text-center font-semibold"
              
            />
          </div>
          <Flex className="justify-between">
            <div className="max-w-[370px] text-center box-border py-[50px] capitalize px-[45px]  bg-green-100 shadow-2xl flex flex-col gap-y-[20px] rounded-[20px] z-20">
              <Image src={serviceImageOne} className="mx-auto" />
              <Paragraph
                text="Marketing Strategy"
                className="text-[30px] text-[#202427] font-semibold"
              />
              <Paragraph
                text="Social Media has changed the way we interact & do business while creating"
               
              />
              
              <Anchor href=""
                text="Read more"
                className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-orange-500 after:right-[167px] after:bottom-[-7px] after:-z-10"
              />
            </div>
            <div className="max-w-[370px] text-center box-border py-[50px] px-[28px]  bg-blue-100 shadow-2xl flex flex-col gap-y-[20px] rounded-[20px] z-20">
              <Image src={serviceImageTwo} className="mx-auto" />
              <Paragraph
                text="Social Marketing"
                className="text-[30px] text-[#202427] font-semibold"
              />
              <Paragraph
                text="Social Media has changed the way we interact & do business while creating a new avenue."
             
              />
              <Anchor href=""
                text="Read more"
                className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-orange-500 after:left-[96px] after:bottom-[-7px] after:-z-10"
              />
            </div>
            <div className="max-w-[370px] text-center box-border py-[50px] px-[28px] bg-orange-100 shadow-2xl flex flex-col rounded-[20px] z-20">
              <Image src={serviceImageThree} className="mx-auto mb-[15px]" />
              <Paragraph
                text="Content Marketing"
                className="text-[30px] text-[#202427] font-semibold"
              />
              <Paragraph
                text="Content Marketing is the other fold of online advertisement. If you are looking to build "
                className="max-w-[278px] mt-[5px] "
              
              />
              <Anchor href=""
                text="Read more"
                className="mt-6 text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-orange-500 after:left-[78px] after:bottom-[-6px] after:-z-10"
              />
            </div>
          </Flex>
        </Container>
    
    );
  };
  
  export default Service;