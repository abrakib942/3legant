import { ToastContainer } from "react-toastify";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <MainLayout />
    </>
  );
}

export default App;
