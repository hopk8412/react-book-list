import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }
    return (
        <div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" className="input" value={title} onChange={handleChange} />
                <button className="button is-primary">Save Changes</button>
            </form>
        </div>
    );
}
export default BookEdit;