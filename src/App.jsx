import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Headers from "./Components/Headers";
import AllRoutes from "./Router/AllRoutes";
import Footer from "./Components/Footer";

function App() {
  const [navbarDisplay, setNavbarDisplay] = useState(window.innerWidth);
  // console.log(window);

  useEffect(() => {
    const handleResize = () => {
      setNavbarDisplay(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {navbarDisplay > 1024 ? <Navbar /> : null}
      <Headers />
      <AllRoutes />
      {/* <Footer /> */}
    </>
  );
}

export default App;
