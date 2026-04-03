import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";



const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/country/:id`} element={<Country />}/>
      </Routes>
    </>
  );
};

export default App;
