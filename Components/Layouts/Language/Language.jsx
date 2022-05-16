import Container from "../Container/Container";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Language() {
  return (
    <>
      <div className="HeaderInfo">
        <Container>
          <div className="Info">
            <div>
              <a href="tel:(808) 555-0111">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.45 2.16667C3.5 2.90833 3.625 3.63333 3.825 4.325L2.825 5.325C2.48333 4.325 2.26667 3.26667 2.19167 2.16667H3.45ZM11.6667 12.1833C12.375 12.3833 13.1 12.5083 13.8333 12.5583V13.8C12.7333 13.725 11.675 13.5083 10.6667 13.175L11.6667 12.1833ZM4.25 0.5H1.33333C0.875 0.5 0.5 0.875 0.5 1.33333C0.5 9.15833 6.84167 15.5 14.6667 15.5C15.125 15.5 15.5 15.125 15.5 14.6667V11.7583C15.5 11.3 15.125 10.925 14.6667 10.925C13.6333 10.925 12.625 10.7583 11.6917 10.45C11.6083 10.4167 11.5167 10.4083 11.4333 10.4083C11.2167 10.4083 11.0083 10.4917 10.8417 10.65L9.00833 12.4833C6.65 11.275 4.71667 9.35 3.51667 6.99167L5.35 5.15833C5.58333 4.925 5.65 4.6 5.55833 4.30833C5.25 3.375 5.08333 2.375 5.08333 1.33333C5.08333 0.875 4.70833 0.5 4.25 0.5Z"
                    fill="white"
                  />
                </svg>{" "}
                <p>(808) 555-0111</p>
              </a>
            </div>

            <div className="Language">
              {/* <select  selected="none" >
            <option lang="EN">EN</option>
            <option lang="RU">RU</option>
            <option lang="AM">AM</option>
          </select> */}
              <Box sx={{ minWidth: 79, height:40 }}>
                <FormControl fullWidth style={{ border: "none" }}>
                  <Select defaultValue={"EN"}>
                    <MenuItem value="EN">EN</MenuItem>
                    <MenuItem value="RU">RU</MenuItem>
                    <MenuItem value="AM">AM</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
