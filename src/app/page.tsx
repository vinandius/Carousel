"use client";
import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import AboutSection from "@/components/aboutsection";
import CarCard from "@/components/carcard";
import History from "@/components/history";
import Win from "@/components/win";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <AboutSection />
        <CarCard />
        <History />
        <Win />
        <Footer />
      </main>
    </div>
  );
}