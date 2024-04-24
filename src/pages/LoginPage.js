import {
  Modal,
  Typography,
  Box,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useContext } from "react";
import FTextField from "../loginPageHookFormComponents/FTextField";
import FormProvider from "../loginPageHookFormComponents/FormProvider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { redirect, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 450,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 22,
};

function LoginPage() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const defaultValues = {
    username: "dasdasd",
    email: "duythang179@gmail.com",
    password: "123456",
  };

  const methods = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "server response error" });
  };

  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log("location", location);

  const handleClose = () => {
    navigate(-1);
  };

  const auth = useContext(AuthContext);

  const handleLoginClick = (e) => {
    console.log("e.target.value", e.target.value);
    auth.signIn(defaultValues.username, () => {
      navigate(from, { replace: true });
    });
    // redirect();
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          style={{
            background: "#00AAFF",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "7px",
            padding: "10px",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "white",
              fontFamily: "roboto",
              width: "20%",
              margin: "auto",
              padding: " 0 20px",
            }}
          >
            Login
          </Typography>
        </div>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ marginTop: "20px", padding: "20px" }}>
            <FTextField name="username" label="Username" disabled />
            <FTextField name="email" label="Email Address" disabled />
            <FTextField
              disabled
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              onClick={handleLoginClick}
            >
              Login
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Box>
    </Modal>
  );
}

export default LoginPage;
