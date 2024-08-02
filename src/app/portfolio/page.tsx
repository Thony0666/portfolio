"use client"
import React, { useState } from "react";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import BackGround from "@/components/Background";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

const Page: React.FC = () => {
  return (
    <>
      <Home />
      <Skills />
      <BackGround />
      <Project />
      <Footer />
    </>
  );
};

export default Page;
