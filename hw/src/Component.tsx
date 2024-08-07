import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./Component.module.scss";
import { Button } from "@mui/material";

export default function BasicSelect() {
  const [age, setAge] = React.useState("10");
  const [mouseIn, setMouseIn] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Button
        variant="outlined"
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        {mouseIn ? <div>"yyyy"</div> : <img alt="????" />}
      </Button>
      <Box sx={{ marginTop: 100, minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            MenuProps={{
              classes: {
                paper: styles.my,
              },
              slotProps: {
                paper: {
                  className: "가능은함",
                },
                root: {},
              },
            }}
          >
            {[
              { value: 10, text: "Ten" },
              { value: 20, text: "Twenty" },
              { value: 30, text: "Thirty" },
            ].map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                className={styles.menuItem}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "red",
                  },
                }}
              >
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
