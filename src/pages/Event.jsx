import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { VscTextSize } from "react-icons/vsc";
import { BsLockFill } from "react-icons/bs";
import { IoIosRefresh } from "react-icons/io";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { IoShareOutline } from "react-icons/io5";
import { TbBook } from "react-icons/tb";
import { IoCopyOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const Container = styled.div`
  background: red;
`;

const Wrapper = styled.div`
  background: #f6f2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrimaryCard = styled.div`
  width: 375px;
  height: 375px;
`;

const PrimaryImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const EventInfo = styled.div`
  width: 335px;
  height: 345px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin-left: 35px; */
  padding: 20px;
`;

const EventTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  color: #240d57;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const SecondaryTitle = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 6px;
  color: #828282;
  margin-block-start: 0em;
  margin-block-end: 1em;
`;

const TimeInfo = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
  display: flex;
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 48px;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const TimeCenter = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TimeTop = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #240d57;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const TimeBottom = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #4f4f4f;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const TimeRight = styled.div`
  flex: 1;
`;

const LocationInfo = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
  display: flex;
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 48px;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const LocationCenter = styled.div`
  flex: 4;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LocationTop = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #240d57;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const LocationBottom = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #4f4f4f;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const LocationRight = styled.div`
  flex: 1;
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

const Event = () => {
  const { state } = useLocation();
  const {
    eventName,
    hostName,
    startDate,
    endDate,
    eventLocation,
    eventImg
  } = state;
  console.log(state);

  return (
    <Container>
      <Wrapper>
        <PrimaryCard>
          <PrimaryImg src={eventImg} alt="landing page image" />
        </PrimaryCard>
        <EventInfo>
          <EventTitle>{eventName}</EventTitle>
          <SecondaryTitle>
            Hosted by <b>{hostName}</b>
          </SecondaryTitle>
          <TimeInfo>
            <TimeLeft>
              <HiOutlineCalendar size="2em" color="#8456EC" />
            </TimeLeft>
            <TimeCenter>
              <TimeTop>{startDate} TIME</TimeTop>
              <TimeBottom>
                to <b>{endDate} TIME</b> UTC +10
              </TimeBottom>
            </TimeCenter>
            <TimeRight>
              <BsChevronRight />
            </TimeRight>
          </TimeInfo>
          <LocationInfo>
            <LocationLeft>
              <IoLocationOutline size="2em" color="#8456EC" />
            </LocationLeft>
            <LocationCenter>
              <LocationTop>{eventLocation}</LocationTop>
              <LocationBottom>{eventLocation}</LocationBottom>
            </LocationCenter>
            <LocationRight>
              <BsChevronRight />
            </LocationRight>
          </LocationInfo>
        </EventInfo>
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

export default Event;
