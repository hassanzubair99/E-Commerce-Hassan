import React from "react";
import Image from "next/image";
import NewCollection from "./hero"
import NavBar from "./nav";
import EditorSections from "./com_two";
import Products from "./Product";
import NeuralUniverseSection from "./NeuralUniverseSection";
import FeaturedPosts from "./FeaturedPost";
import Footer from "./Footer";

import { Link } from "react-router-dom";
export default function front() {

  return (
    <>
   
      <NavBar />
      <NewCollection />
      <EditorSections />
     <Products />
      <NeuralUniverseSection />
      <FeaturedPosts />
      <Footer />
  
    </>
  );
}
