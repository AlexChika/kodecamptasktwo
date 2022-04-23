import "./App.css";
import { useState } from "react";
function App() {
  const [info, setInfo] = useState([]);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    address: "",
    bio: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    setInfo([...info, inputs]);
  };
  return (
    <main className="app">
      <h1> KodeCamp Task Two</h1>
      <form onSubmit={handleForm}>
        <h2>Welcome</h2>
        <div className="input_con">
          <label htmlFor="firstname">First Name</label>
          <input
            placeholder="Enter your firstname"
            required
            type="text"
            name="firstname"
            id="firstname"
            value={inputs.firstname}
            onChange={(e) =>
              setInputs({ ...inputs, firstname: e.target.value })
            }
          />
          <p></p>
        </div>
        <div className="input_con">
          <label htmlFor="lastname">Last Name</label>
          <input
            placeholder="Enter your lastname"
            required
            type="text"
            name="lastname"
            id="lastname"
            value={inputs.lastname}
            onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })}
          />
          <p></p>
        </div>
        <div className="input_con">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter your email"
            required
            type="email"
            name="email"
            id="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
        <p>Gender</p>
        <div className="gender">
          <div>
            <label htmlFor="male">Male</label>
            <input
              onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
              required
              type="radio"
              value="Male"
              name="gender"
              id="male"
            />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input
              onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
              required
              type="radio"
              value="Female"
              name="gender"
              id="female"
            />
          </div>
        </div>
        <div className="input_con">
          <label htmlFor="address">Address</label>
          <input
            placeholder="Enter your Address"
            type="text"
            name="address"
            id="address"
            value={inputs.address}
            onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
          />
        </div>
        <div className="input_con">
          <label htmlFor="bio">Bio</label>
          <input
            placeholder="Enter a brief bio"
            type="text"
            name="bio"
            id="bio"
            value={inputs.bio}
            onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <section className="container">
        {info.map((card, index) => (
          <article className="card" key={index}>
            <div className="heading">
              <h2>{card.firstname + " " + card.lastname}</h2>
              <h3>{card.email}</h3>
            </div>
            <p className="bio_header">Bio</p>
            <div className="details">
              <h5>Gender</h5>
              <p>{card.gender}</p>
              <h5>Address</h5>
              <p>{card.address}</p>
              <h5>Bio</h5>
              <p>{card.bio}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
