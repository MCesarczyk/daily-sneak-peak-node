import React from "react";
import Paths from "../../routes";
import Footer from "../Footer";
import Header from "../Header";
import { InnerWrapper, OuterWrapper } from "./styled";

const Home = () => (
  <OuterWrapper>
    <Header />
    <InnerWrapper>
      <Paths />
    </InnerWrapper>
    <Footer />
  </OuterWrapper>
);

export default Home;