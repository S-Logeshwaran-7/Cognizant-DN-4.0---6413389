export const Book = () => {
    const bookDetails = [
        {'name':'Master React','cost':'670'},
        {'name':'Deep Dive into Angular 11','cost':'800'},
        {'name':'Mongo Essentials','cost':'450'}];
    return (
        <div>
            {bookDetails.map((book, index) => (
                <div key={index}>
                    <h3>{book.name}</h3>
                    <p>{book.cost}</p>
                </div>
            ))}
        </div>
    )
}
