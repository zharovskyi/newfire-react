import React, { useMemo, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import data from "./data.json";

const SignUp = () => {
  const [country, setCountry] = useState("");
  const [division, setDivision] = useState("");
  const [city, setCity] = useState("");

  const [optionsDivision, setOptionsDivisions] = useState([]);

  const [hideCountry, setHideCountry] = useState(false);

  const handleClick = () => {
    setHideCountry((prev) => !prev);
  };

  const handleChange = (event) => {
    setDivision("");
    setCity("");
    setCountry(event.target.value);
    setOptionsDivisions(() =>
      data.filter((item) => item.country === event.target.value),
    );
  };

  const handleChangeDivision = (event) => {
    setDivision(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const memoizedDivision = useMemo(() => handleChangeDivision, [division]);
  const memoizedCity = useMemo(() => handleChangeCity, [city]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      country: data.get("country"),
      devision: data.get("devision"),
      city: data.get("city"),
    });

    setDivision("");
    setCity("");
    setCountry("");
  };
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#00AB55" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Get in touch
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Show country location"
                onClick={handleClick}
              />
            </Grid>
            {hideCountry && (
              <>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={country}
                      label="Country"
                      name="country"
                      onChange={handleChange}
                    >
                      {data.map((item) => (
                        <MenuItem key={item.id} value={item.country}>
                          {item.country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-devision-label">
                      Devision
                    </InputLabel>
                    <Select
                      id="demo-simple-select-devision-label"
                      value={division}
                      label="Divisions"
                      name="devision"
                      onChange={memoizedDivision}
                    >
                      {optionsDivision.length > 0 &&
                        optionsDivision.map((item) => (
                          <MenuItem key={item.id} value={item.divisions.state}>
                            {item.divisions.state}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-city-label">
                      City
                    </InputLabel>
                    <Select
                      id="demo-simple-select-city-label"
                      value={city}
                      onChange={memoizedCity}
                      label="City"
                      name="city"
                    >
                      {optionsDivision.length > 0 &&
                        optionsDivision.map((item) =>
                          item?.divisions.city.map((cities) => (
                            <MenuItem key={cities} value={cities}>
                              {cities}
                            </MenuItem>
                          )),
                        )}
                    </Select>
                  </FormControl>
                </Grid>
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Get in touch
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
