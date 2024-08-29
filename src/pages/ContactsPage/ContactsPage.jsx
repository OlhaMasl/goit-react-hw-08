import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import s from "./ContactsPage.module.css";


const Phonebook = () => {

    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    
    return (
        <>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <h1 className="loading">Loading...</h1>}
        {isError && <h2 className="error">Oops, something went wrong...</h2>}
        </>
    );
};

export default Phonebook;