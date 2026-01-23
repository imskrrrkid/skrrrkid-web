import { useState } from "react";
import Contact from "./Contact";
import Home from "./Home";
import SoftwareCat from "./SoftwareCat";
import Threed from "./Threed";
import Gamedev from "./Gamedev";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}
      {page === "contact" && <Contact setPage={setPage} />}
      {page === "software" && <SoftwareCat setPage={setPage} />}
      {page === "threed" && <Threed setPage={setPage} />}
      {page === "gamedev" && <Gamedev setPage={setPage} />}
    </>
  );
}
export default App;
