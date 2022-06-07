import { Alert, Button } from "antd";
import { useState } from "react";

export default function Home({ token }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const getPrivateStuff = () => {
    fetch("http://localhost:5050/private", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setMessage("");
          return;
        }
        setMessage(data.message);
        setError("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Home</h1>
      {message && <Alert message={message} type="success" />}
      <br />
      {message && <Alert message={error} type="error" />}
      <br />
      <Button onClick={getPrivateStuff} type="primary" size="large">
        Get Private Stuff
      </Button>
    </>
  );
}