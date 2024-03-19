import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./components/Login";
import { SecondPage } from "./components/Next";
import { Third } from "./components/Third";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/sec" element={<SecondPage />} />
            <Route path="/th" element={<Third />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
