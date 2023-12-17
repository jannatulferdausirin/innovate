import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Paragraph from "../Paragraph";

const SubFooter = () => {
  return (
    <Container className="my-12">
      <Flex className="text-gray-500 font-openSans text-large grid grid-cols-3">
        <div className="col col-span-2">
          <Paragraph className="" text="@20201 Innovate.All rights reserved." />
        </div>
        <div>
          <Flex>
            <div className="pe-8">
              <Paragraph  text="Privacy policy" />
            </div>
            <div>
              <Paragraph text="Term and condition" />
            </div>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
};

export default SubFooter;
