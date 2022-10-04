import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Event from "./pages/Event";

const Container = styled.div`
  font-family: "Helvetica";
`;

const BlankRoute = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Event />} />
          <Route
            path="*"
            element={
              <BlankRoute>
                <p>There's nothing here! Try a valid link. </p>
              </BlankRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
