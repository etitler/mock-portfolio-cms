import React from "react";
import "@fortawesome/free-solid-svg-icons";
import "../styles.scss";
import Head from "next/head";

import Header from "../components/Header";

const Index = () => (
  <>
    <script src="https://kit.fontawesome.com/44ba6bd4d7.js" crossorigin="anonymous"></script>
    <Head className="header">
      <h1>Welcome to Next.js</h1>
      <div className="hamburger">
        <i class="fas fa-bars"></i>
      </div>
    </Head>
  </>
);

export default Index;