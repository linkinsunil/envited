import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f6f2ff;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80vw;
  padding: 20px;
  background: #f6f2ff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #bdbdbd;
`;

const PrimarySpan = styled.span`
  background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Fieldset = styled.fieldset`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
`;

const Input = styled.input`
  width: 90%;
  background: transparent;
  outline: none;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const Create = () => {
  const [state, setState] = useState({
    eventName: "",
    hostName: "",
    startDate: null,
    endDate: null,
    eventLocation: "",
    eventImg: null
  });
  const navigate = useNavigate();
  const uploadedImage = useRef(null);

  const handleImage = (e) => {
    setState({ ...state, eventImg: e.target.files[0] });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploads";
    const formData = new FormData();
    formData.append("file", state.eventImg);
    formData.append("fileName", state.eventImg.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          <PrimarySpan>EVENT</PrimarySpan>ERROGATION ;)
        </Title>
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <legend>Event Name</legend>
            <Input
              placeholder="start typing..."
              onChange={(e) =>
                setState({ ...state, eventName: e.target.value })
              }
            />
          </Fieldset>
          <Fieldset>
            <legend>Host Name</legend>
            <Input
              placeholder="start typing..."
              onChange={(e) => setState({ ...state, hostName: e.target.value })}
            />
          </Fieldset>
          <Fieldset>
            <legend>Start Date</legend>
            <Input
              type="date"
              onChange={(e) =>
                setState({ ...state, startDate: e.target.value })
              }
            />
          </Fieldset>
          <Fieldset>
            <legend>End Date</legend>
            <Input
              type="date"
              onChange={(e) => setState({ ...state, endDate: e.target.value })}
            />
          </Fieldset>
          <Fieldset>
            <legend>Event Location</legend>
            <Input
              placeholder="start typing..."
              onChange={(e) =>
                setState({ ...state, eventLocation: e.target.value })
              }
            />
          </Fieldset>
          <Fieldset>
            <legend>Event Image</legend>
            <Input
              type="file"
              accept="image/*"
              multiple="false"
              onChange={handleImage}
            />
          </Fieldset>

          <Button type="submit" onClick={() => navigate("/event", { state })}>
            CREATE EVENT
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Create;
