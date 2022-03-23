import React from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Testimonials from "./components/Testimonials";
import ReviewCard from "./components/ReviewCard";
import reviews from "./review_data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <Testimonials />
      <div className="container">
        <div className="row"></div>
        <ReviewCard data={reviews[0]} />
        <ReviewCard data={reviews[1]} />
        <ReviewCard data={reviews[2]} />
        <ReviewCard data={reviews[3]} />
        <ReviewCard data={reviews[4]} />
        <ReviewCard data={reviews[5]} />
        <ReviewCard data={reviews[6]} />
      </div>
    </div>
  );
}

export default App;
