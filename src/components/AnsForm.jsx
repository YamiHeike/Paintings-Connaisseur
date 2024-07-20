import { useState } from "react";
import Button from "./Button";
import "../styles/AnsForm.css";

function AnsForm({ submitFunc, resetFunc }) {
  const [data, setData] = useState({ title: "", artist: "" });

  const handleChange = (evt) => {
    setData((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitFunc(data);
    setData({ title: "", artist: "" });
  };

  console.log(data);
  return (
    <div className="AnsForm">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Enter title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={data.title}
          required
        />
        <label htmlFor="artist">Artist's full name:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          placeholder="Artist"
          onChange={handleChange}
          value={data.artist}
          required
        />
        <div>
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AnsForm;
