import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Button, Input } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

const initialUser = {
  identifier: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState<typeof initialUser>(initialUser);
  const [token, saveToken] = useLocalStorage("token", null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/manage");
    }
  }, [navigate, token]);
  const onChangeInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/account/login`,
      {
        method: "POST",
        body: JSON.stringify({ user }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    saveToken(result.user.token);
  };

  return (
    <>
      <Nav />
      <form
        onSubmit={onSubmit}
        className="min-h-screen flex justify-center mx-auto gap-4 flex-col items-center"
      >
        <Input
          isRequired
          type="text"
          label="Username or Email"
          className="max-w-xs"
          name="identifier"
          onChange={onChangeInputState}
          value={user.identifier}
        />
        <Input
          isRequired
          type="password"
          label="Password"
          className="max-w-xs"
          name="password"
          onChange={onChangeInputState}
          value={user.password}
        />

        <Button color="primary" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
