import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import logoTwo from '../../assets/Group 1000006797.png'
import logoThree from '../../assets/Group 1000006832.png'
import logoFour from '../../assets/Group 1000006832 (1).png'


const Review = () => {
    return (
        <Container className="my-24">
          <Flex className="justify-between">
            <div className="w-[348px] h-[386px]">
              <Image src={logoTwo} />
              <Heading
                text="Client Review"
                as="h3"
                className="font-bold text-4xl py-4 font-openSans "

              />
              <Paragraph
              
                text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient. "
               
              />
              <Flex className="w-[160px] mt-[20px]">
                <div className="bg-orange-200 w-[42px] h-[42px] text-center box-border rounded-full pt-[5px]">
                  <i className="fa-solid fa-angle-right text-white text-[30px]  "></i>
                </div>
                <div className="bg-orange-400 ml-[15px] w-[42px] h-[42px] text-center box-border rounded-full pt-[5px]">
                  <i className="fa-solid fa-angle-left text-white text-[30px]"></i>
                </div>
              </Flex>
            </div>
           
            <div className="w-[370px] pt-8 px-12  bg-[#D8EAFF] rounded-[20px] shadow-2xl font-Nunito">
              <Paragraph
                text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
              
              />
  
              <Flex className="mr-8">
                <Image src={logoFour} className="mr-16 " />
                <div className='pt-8'>
                  <Paragraph
                    text="Jane Cooper"
                    className="text-[#202427] text-[24px] font-semibold mt-[25px]"
                  />
                 <Paragraph
                    text="Fashion designer"
                    className="text-[#202427] text-[18px] font-semibold  mt-[10px]"
                  />
                </div>
              </Flex>
            </div>
            <div className="w-[370px] pt-8 px-12 ml-8 bg-[#fff] shadow-2xl rounded-[20px] font-Nunito" >
              <Paragraph
                text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
             
              />
  
              <Flex className="pt-8">
                <Image src={logoThree} className="ml-[20px] w-[80%] mt-4" />
                <div className='pt-4'>
                  <Paragraph
                    text="Eleanor Pena"
                    className="text-[#202427] text-[24px] font-semibold mt-[25px]"
                  />
                  <Paragraph
                    text="Architecture"
                    className="text-[#202427] text-[18px] font-semibold  mt-[10px]"
                  />
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
    );
  };
  
  export default Review;