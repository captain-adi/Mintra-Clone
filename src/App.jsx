import { Provider } from "react-redux";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { store } from "./Store/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;
