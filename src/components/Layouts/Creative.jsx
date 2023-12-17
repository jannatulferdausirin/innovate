import React from 'react';
import Paragraph from '../Paragraph';
import Container from '../Container';
import Image from '../Image';
import Heading from '../Heading';
import Flex from '../Flex';
import creativeImage from '../../assets/Image 3 (1).png';
import creativeImageLogo from '../../assets/Group 1000006797.png';


const Creative = () => {
    return (
      
        <Container className="my-24">
          <div className="mb-[50px] text-center ">
            <Image src={creativeImageLogo} className="mx-auto " />
            <Heading  className="font-bold text-4xl py-4 font-openSans "
              text="Our creative process."
              as="h3"
             
            />
            <Paragraph
              className="text-[18px] text-[#6C7D93] text-center "
              text="We provide digital experience services to startups and small businesses."
            />
          </div>
          <Flex className="justify-between">
            <div className="max-w-[465px] bg-green-100 shadow-2xl z-10 pr-[85px] pl-[25px] pb-[20px] rounded-[20px] max-h-[207px]  mt-[60px]">
              <Paragraph
                text="Step-1"
                className="text-[#202427] relative text-[18px] font-bold after:w-[33px] after:h-[33px] after:rounded-[50%] after:bg-orange-300 after:content-[''] after:-z-50 after:absolute after:left-[-13px] after:top-[-6px] mt-[28px] ml-[12px]"
              />
              <Paragraph
                text="Global SEO Research"
                className="my-[15px] text-[#202427] text-[30px] font-semibold"
              />
              <Paragraph
             
                text="Practical tools and features make it easier to build and manage your site.
                "
               
              />
            </div>
            <Image src={creativeImage}  />
          </Flex>
          <Flex className="justify-between">
            <Image src={creativeImage} />
            <div className="max-w-[465px] bg-blue-100 shadow-2xl z-10 pr-[70px] pl-[25px] pb-[20px] rounded-[20px] max-h-[207px] mt-[60px]">
              <Paragraph
                text="Step-2"
                className="text-[#202427] relative text-[18px] font-bold after:w-[33px] after:h-[33px] after:rounded-[50%] after:bg-orange-300 after:content-[''] after:-z-50 after:absolute after:left-[-13px] after:top-[-6px] mt-[28px] ml-[12px]"
              />
              <Paragraph
                text="Social media integration"
                className="my-[15px] text-[#202427] text-[30px] font-semibold"
              />
              <Paragraph
                text="Practical tools and features make it easier to build and manage your site."
  
              />
            </div>
          </Flex>
          <Flex className="justify-between">
            <div className="max-w-[465px] bg-orange-100 shadow-2xl z-10 pr-[40px] pl-[25px] pb-[20px] rounded-[20px] max-h-[207px] mt-[60px]">
              <Paragraph
                text="Step-3"
                className="text-[#202427] relative text-[18px] font-bold after:w-[33px] after:h-[33px] after:rounded-[50%] after:bg-orange-300 after:content-[''] after:-z-50 after:absolute after:left-[-13px] after:top-[-6px] mt-[28px] ml-[12px]"
              />
              <Paragraph
                text="Launching the Application"
                className="my-[15px] text-[#202427] text-[30px] font-semibold"
              />
              <Paragraph
                text="Practical tools and features make it easier to build and manage your site.
                "
              
              />
            </div>
            <Image src={creativeImage} />
          </Flex>
        </Container>
   
    );
  };
  
  export default Creative;