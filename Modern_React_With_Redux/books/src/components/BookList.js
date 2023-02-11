import BookShow from './BookShow'
import useBooks from '../hooks/useBooks'

const BookList = () => {

    const { books } = useBooks()

    const renderedBooks = books.map(book => {
        return  <BookShow 
                    key={book.id} 
                    book={book}
                />
    })

    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    )
}

export default BookList