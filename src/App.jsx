/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Content from "./layout/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialNavigation from "./components/SocialNavigation";

function App() {
  return (
    <Layout>
      <SocialNavigation />
      <Header />
      <Content>
        <h1>Hello</h1>
        <h2>Hello</h2>
        <h3>Helloo</h3>
        <h4>Helllo</h4>
        <h5>Hellpop</h5>
        <h6>Hellllop</h6>
        <p>Hellooo</p>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
