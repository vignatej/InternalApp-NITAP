import { Route, Routes} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Placements from "./pages/Placements";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { startAppLogin } from "./store/auth-actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList.add("bg-background", "text-txtCol");
    dispatch(startAppLogin());
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/placements/*" element={<Placements />} />
    </Routes>
  );
}

export default App;
