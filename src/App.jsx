import Navbar from "./components/Navbar";
import Routers from "./pages/Routers";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import Disclaimer from "./pages/Disclaimer";
function App() {
  const navigate = useNavigate();

  const [isDisclaimerRead, setIsDisclaimerRead] = useState(
    localStorage.getItem("isDisclaimerRead")
  );

  return (
    <>
      {isDisclaimerRead ? (
         <div>
          <Navbar />
          <Routers />
        </div>
      ) : (
       <div><Disclaimer /></div>
      )}
    </>
  );
}

export default App;
