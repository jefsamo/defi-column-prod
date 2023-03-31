import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Space,
} from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";

import "./login.scss";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="login">
      <div className="login-content">
        <Box maw={320} mx="auto">
          <TextInput
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <Space h="md" />
          <PasswordInput
            label="Password"
            placeholder="Password"
            visibilityToggleIcon={({ reveal, size }) =>
              reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
            }
          />
        </Box>
        <Group position="center" mt="xl">
          <Button variant="outline" className="login-btn">
            Login
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default Login;
