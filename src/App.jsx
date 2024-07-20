import "./App.css";
import Card from "./components/Card";
import PaintingsArr from "./utils/PaintingsArr";
import Footer from "./components/Footer";
import { useState } from "react";
import { WorkList } from "./pages/WorkList";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  const [isList, setIsList] = useState(false);

  const swap = () => {
    setIsList(!isList);
  };

  return (
    <RouterProvider router={router}>
      <div class="App">
        {isList ? <WorkList /> : <Card imgList={PaintingsArr} />}
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;
