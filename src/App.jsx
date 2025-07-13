import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseOfferings from './components/CourseOfferings';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CourseDetails from './components/CourseDetails';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CourseOfferings />
      <WhyChooseUs />
      <Testimonials />
      <CourseDetails />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;