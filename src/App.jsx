import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Events from "./components/Events";
// import SingupForm from "./components/SignUp";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
      {/* <SingupForm /> */}
    </>
  );
}

export default App;
