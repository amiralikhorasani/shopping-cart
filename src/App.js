import Header from "./components/Header";
import Box from "./components/Box";

import "./app.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Box />
      </div>

      <Toaster
        position="top-left"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#8137B3",
            color: "#EEDDFF",
          },
        }}
      />
    </>
  );
}

export default App;
