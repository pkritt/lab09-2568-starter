import { useState } from "react";


export default function HelloMyNamePage() {

const [name, setName] = useState("");
const [greeting, setGreeting] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGreet = () => {
    if (name.trim() === "") {
      setGreeting("Please input your name!");
    } else {
      setGreeting(`Hello, ${name}!`);
    }
  };

  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        value={name}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary"  onClick={handleGreet} >Greet Me</button>
      {/* Result Text */}
      <p>{greeting}</p>
    </div>
  );
}
