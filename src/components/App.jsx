
import "../index.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import Phonebook from "../pages/Phonebook/Phonebook";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {


  return (
      
      <div className="container">
       
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="phonebook" element={<Phonebook />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
      
    </div>
  );
};

export default App;

