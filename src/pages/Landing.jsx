import React from "react";
import Hero from "../container/Hero";
import ScrolldownBtn from "../components/ScrolldownBtn";
import Nav from "../components/Nav";
import Business from "../container/Business";
import Languages from "../container/Languages";
import Content from "../container/Content";
import Faq from "../container/Faq";
import Footer from "../container/Footer";
import BackTopTopBtn from "../components/BackTopTopBtn";
import NavDots from "../components/NavDots";

const Landing = () => {
    return (
        <div>
            <Nav />
            <NavDots />
            <ScrolldownBtn />
            <BackTopTopBtn />
            <Hero />
            <Business />
            <Languages />
            <Content />
            <Faq />
            <Footer />
        </div>
    );
};

export default Landing;
