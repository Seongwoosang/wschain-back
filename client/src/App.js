import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Pages/Home/home";
import Nav from "./components/Nav/Nav";
import Login from "./components/Pages/Login/login";
import Register from "./components/Pages/Register/Register";
import StudentID from "./components/Pages/Student-ID/Student-ID";
import StdIdRegister from "./components/Pages/StdIdRegister/StdIdRegister";
import QRgen from "./components/Pages/qr/QRgenerator";
import QRscan from "./components/Pages/qr/QRscanner";
import QRhome from "./components/Pages/qr/QRhome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./hoc/auth";

function App() {
  const NewHome = Auth(Home, null);
  const NewLogin = Auth(Login, false);
  const NewRegister = Auth(Register, false);
  const NewStudentID = Auth(StudentID, true);
  const NewStdIdRegister = Auth(StdIdRegister, true);
  const NewQRgenerator = Auth(QRgen, true);
  const NewQRscanner = Auth(QRscan, true);
  const NewQRhome = Auth(QRhome, true);

  return (
    <BrowserRouter>
      <Nav />

      <div className="pages">
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/login" element={<NewLogin />} />
          <Route path="/register" element={<NewRegister />} />
          <Route path="/studentID" element={<NewStudentID />} />
          <Route path="/stdIdRegister" element={<NewStdIdRegister />} />
          <Route path="/QRgenerator" element={<NewQRgenerator />} />
          <Route path="/QRscanner" element={<NewQRscanner />} />
          <Route path="/QRhome" element={<NewQRhome />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <Router>
    //   <div className="App">
    //     <Nav />
    //     <div className="auth-wrapper">
    //       <div className="auth-inner">
    //         <Routes>
    //           <Route path="/" element={<NewHome />} />
    //           <Route path="/login" element={<NewLogin />} />
    //           <Route path="/register" element={<NewRegister />} />
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
