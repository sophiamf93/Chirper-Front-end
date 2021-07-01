import React, { useState } from "react";
import Timeline from "./Timeline";

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [array, setArray] = useState([
    { username: "Obi-wan Kenobi", message: "Use the Force" },
    { username: "Mando", message: "This is the way" },
    {
      username: "JarJar Binks",
      message: "“Yousa need to do that…that thing… ",
    },
  ]);

  function handleSubmit() {
    let newChirp = { username: username, message: message };
    setArray([...array, newChirp]);
  }

  return (
    <>
      <div className="main-container">
        <div className="input-div">
          <div className="card-body">
            <div>
              <textarea
                className="text-area1"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="text-area"
                placeholder="Your thoughts ..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <a
                href="#"
                className="btn"
                onClick={() => handleSubmit()}
              >
                Chirp It!
              </a>
            </div>
          </div>
        </div>
        <div 
        className="chirps"> {array.map((chirp) => (<Timeline chirp={chirp} />))}
        </div>
      </div>
    </>
  );
};

export default App;
