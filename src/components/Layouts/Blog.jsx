import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Flex from '../Flex';
import blogImg from '../../assets/Image 3 (1).png'
import logo from '../../assets/Group 1000006797.png'
import Anchor from '../Anchor';

const Blog = () => {
    return (
     
        <Container className="py-16">
          <div className="mb-[50px] text-center">
            <Image src={logo} className="mx-auto" />
            <Heading
              text="Our Latest Blog"
              className="my-[20px] text-center text-[48px] text-[#413F45] font-bold"
              as="h4"
            />
            <Paragraph
              className="w-[400px] text-[18px] text-[#6C7D93]  ml-[380px] text-center"
              text="We provide digital experience services to startups and small businesses."
            />
          </div>
          <Flex className="justify-between">
            <div className="w-[369px] z-10  bg-white rounded-[30px] shadow-2xl py-8">
              <Image src={blogImg} />
              <div className="ml-[30px] pb-[30px] mt-4 px-4">
                <Paragraph
                  text="How to Be Ahead of Stock Changes"
                  className="w-[232px] text-[#413F45] text-[24px] font-medium font-workSans mt-[30px]"
                />
                <Paragraph
                  text="By John  - 5 Comments"
                  className="text-[18px] text-[#474747] font-nun mt-[15px] mb-[30px]"
                />
                <Anchor href=""
                text="Read more"
                className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-orange-500 after:right-[60px] after:bottom-[-7px] after:-z-10 "
              />
              </div>
            </div>
  
            <div className="w-[369px] z-10  bg-white rounded-[30px] shadow-2xl py-8">
              <Image src={blogImg} />
              <div className=" pb-[30px] px-4 mt-4">
                <Paragraph
                  text="Online Reputation And Management"
                  className="w-[232px] text-[#413F45] text-[24px] font-medium  mt-[30px] "
                />
                <Paragraph
                  text="By Amin  - 10 Comments"
                  className="text-[18px] text-[#474747]  mt-[15px] mb-[50px]"
                />
                 <Anchor href=""
                text="Read more"
                className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-orange-500 after:right-[60px] after:bottom-[-7px] after:-z-10 "
              />
              </div>
            </div>
            <div className="w-[369px] z-10  bg-white rounded-[30px] shadow-2xl py-8">
              <Image src={blogImg} />
              <div className="ml-[30px] pb-[30px] mt-4 px-4">
                <Paragraph
                  text="Tips To Move Your Project More Forward"
                  className="w-[272px] text-[#413F45] text-[24px] font-medium font-workSans mt-[30px]"
                />
                <Paragraph
                  text="By Insider  - 15 Comments"
                  className="text-[18px] text-[#474747] font-nun mt-[15px] mb-[30px]"
                />
                <Anchor href=""
                text="Read more"
                className="text-[18px] text-[#202427] font-bold relative after:absolute after:w-[33px] after:h-[33px] after:rounded-[50%] after:content-[''] after:bg-orange-500 after:right-[60px] after:bottom-[-7px] after:-z-10 "
              />
              </div>
            </div>
          </Flex>
        </Container>
    );
  };
  
  export default Blog;