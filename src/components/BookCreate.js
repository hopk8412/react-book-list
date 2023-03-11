import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
        id: Math.round(99999999 * Math.random()),
        title,
    };
    onCreate(newBook);
    setTitle('');
  };
  return (
    <div className="book-create">
        <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" className="input" onChange={handleChange} value={title} />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
}
export default BookCreate;
