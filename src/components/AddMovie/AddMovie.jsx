// components/AddMovie/AddMovie.jsx
import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import { Form, Label, Input } from "../UI/Form"; 
import Button from "../UI/Button/Index"; 
import MoviesContext from "@context/ContextMovie";  // Menggunakan alias

function AddMovie() {
  const { movies, setMovies } = useContext(MoviesContext);  // Mengakses movies dan setMovies dari context
  const [formData, setFormData] = useState({ title: "", year: "" });
  const [formError, setFormError] = useState({ title: false, year: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormError({ ...formError, [name]: false });
  };

  const validate = () => {
    const error = {
      title: formData.title.trim() === "",
      year: formData.year.trim() === "",
    };
    setFormError(error);
    return !Object.values(error).some((val) => val);
  };

  const addMovie = () => {
    const newMovie = {
      id: nanoid(),  // Generate unique id for each movie
      title: formData.title,
      year: formData.year,
      type: "Movie",
      poster: "/ayuy.png",  // Just a placeholder for poster image
    };
    setMovies([...movies, newMovie]);  // Add new movie to the state
  };

  const resetForm = () => {
    setFormData({ title: "", year: "" });
    setFormError({ title: false, year: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addMovie();  // Add the movie
      resetForm();  // Reset form after submission
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title">Judul</Label>
      <Input
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Judul"
      />
      {formError.title && <Alert>Title Wajib Diisi</Alert>}

      <Label htmlFor="year">Tahun</Label>
      <Input
        id="year"
        name="year"
        type="text"
        value={formData.year}
        onChange={handleChange}
        placeholder="Tahun"
      />
      {formError.year && <Alert>Tahun Wajib Diisi</Alert>}

      <Button type="submit" $variant="primary" $size="md">
        Submit
      </Button>
    </Form>
  );
}

export default AddMovie;
