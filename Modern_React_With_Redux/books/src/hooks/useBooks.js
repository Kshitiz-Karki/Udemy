import { useContext } from "react";
import BooksContext from "../context/books";

const useBooks = () => {
    return useContext(BooksContext)
}

export default useBooks