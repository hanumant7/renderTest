import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://rendertest-y3pp.onrender.com")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend connection failed"));
  }, []);

  return (
    <div style={{display:"grid",placeItems:"center",minHeight:"100vh"}}>
      <div style={{textAlign:"center"}}>
        <h1>React + FastAPI Render Test</h1>
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default App;
