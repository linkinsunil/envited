import styled from "styled-components";
import { VscTextSize } from "react-icons/vsc";
import { BsLockFill } from "react-icons/bs";
import { IoIosRefresh } from "react-icons/io";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { IoShareOutline } from "react-icons/io5";
import { TbBook } from "react-icons/tb";
import { IoCopyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  background: #f6f2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const PrimaryText = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const PrimarySpan = styled.span`
  background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
const SecondaryText = styled.p`
  text-align: center;
  color: #4f4f4f;
  line-height: 18px;
  font-size: 16px;
  font-weight: 300;
`;
const PrimaryCard = styled.div`
  width: 165.63px;
  height: 292px;
  margin-bottom: 20px;
`;
const PrimaryImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PrimaryButton = styled.button`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 187px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Footer = styled.div`
  background: rgba(249, 249, 249, 0.94);
  backdrop-filter: blur(10px);
  width: 375px;
  height: 133px;
  border-top: 0.5px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const InputContainer = styled.div`
  gap: 3px;
  padding: 0 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 331px;
  height: 44px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
`;

const LeftItem = styled.div``;

const Center = styled.div`
  flex: 1;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  background-color: transparent;
  width: 125px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const RightItem = styled.div``;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 331px;
`;

const Option = styled.div``;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <PrimaryText>
          Imagine if <PrimarySpan>Snapchat</PrimarySpan> had events.
        </PrimaryText>
        <SecondaryText>
          Easily host and share events with your friends across any social
          media.
        </SecondaryText>
        <PrimaryCard>
          <PrimaryImg
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T110256Z&X-Amz-Expires=86400&X-Amz-Signature=a076a3717fb047fb6f3db9f4aeec7613381dc920fcef1d48ddfe61bae4301fbb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
            alt="landing page image"
          />
        </PrimaryCard>
        <PrimaryButton onClick={() => navigate("/create")}>
          <span role="img" aria-label="celebrations emoji">
            🎉
          </span>{" "}
          Create my event
        </PrimaryButton>
        <Footer>
          <InputContainer>
            <Left>
              <LeftItem>
                <VscTextSize />
              </LeftItem>
              <LeftItem>
                <BsLockFill />
              </LeftItem>
            </Left>
            <Center>
              <Input placeholder="search here" defaultValue="domain.com" />
            </Center>
            <Right>
              <RightItem>
                <IoIosRefresh />
              </RightItem>
            </Right>
          </InputContainer>
          <OptionsContainer>
            <Option>
              <BsChevronLeft color="#2E7CF6" />
            </Option>
            <Option>
              <BsChevronRight />
            </Option>
            <Option>
              <IoShareOutline color="#2E7CF6" />
            </Option>
            <Option>
              <TbBook color="#2E7CF6" />
            </Option>
            <Option>
              <IoCopyOutline color="#2E7CF6" />
            </Option>
          </OptionsContainer>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Home;
