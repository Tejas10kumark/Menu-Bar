import React from "react";
import Navbar from "./components/navbar";
import pic from "./assets/developer1.avif";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Welcome to My Navigation Bar</h1>
        <img src={pic} alt="mypic" width="800" height="600" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
