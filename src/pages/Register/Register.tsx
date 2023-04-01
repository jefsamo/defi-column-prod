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
import { Toaster } from "react-hot-toast";
import "./register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "@mantine/core";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const handleSubmit = async () => {
    login(email, password);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="register">
      <Toaster />
      <div className="register-content">
        <Box maw={320} mx="auto">
          <TextInput
            label="Name"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Space h="md" />
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
          <Space h="md" />
          <PasswordInput
            label="Password Confirm"
            placeholder="Password Confirm"
            value={passwordConfirm}
            name="passwordConfirm"
            visibilityToggleIcon={({ reveal, size }) =>
              reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
            }
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Space h="md" />
          <Select
            label="Pick role"
            placeholder="Pick one"
            searchable
            nothingFound="No options"
            data={["user", "writer"]}
          />
        </Box>
        <Group position="center" mt="xl">
          <Button
            variant="outline"
            className="login-btn"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default Register;
