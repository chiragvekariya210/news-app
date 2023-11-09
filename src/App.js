import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsList from './pages/NewsList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
       <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsList />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
