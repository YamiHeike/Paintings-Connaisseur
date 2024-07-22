import "./App.css";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [isList, setIsList] = useState(false);

  const swap = () => {
    setIsList(!isList);
  };

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
