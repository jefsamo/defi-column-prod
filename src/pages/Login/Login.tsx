import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Space,
} from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";

import { useAuthContext } from "../../contexts/auth_context";
import { Toaster, toast } from "react-hot-toast";

import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const state = {
  //   isErrorLike: false,
  //   name: "Wale",
  // };
  // console.log({ ...state, isErrorLike: true });

  const { login, isError } = useAuthContext();

  const handleSubmit = async () => {
    login(email, password);
    if (isError) {
      console.log("ERROR!!!");
      toast.error("Incorrect Email or password");
      return;
    } else {
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="login">
      <Toaster />
      <div className="login-content">
        <Box maw={320} mx="auto">
          <TextInput
            label="Email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Space h="md" />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            name="password"
            visibilityToggleIcon={({ reveal, size }) =>
              reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Group position="center" mt="xl">
          <Button
            variant="outline"
            className="login-btn"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default Login;
