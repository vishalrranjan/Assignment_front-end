import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";
import "./App.css";
const Login = lazy(() => import("./Component/Login"));
const Register = lazy(() => import("./Component/Register"));
const Welcome = lazy(() => import("./Component/Welcome"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
