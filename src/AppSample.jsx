import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import PaymentForm from "./PaymentForm";
import Navbar from "./components/Navbar";

function AppSample() {
  return (
    <>
      <PaymentForm />
      <Navbar />
    </>
  );
}

export default AppSample;
