import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "../../../Layouts/Container/Container";

export default function SubMenuItem({ Data }) {
  return (
    <>
      {" "}
      <div className="BoxWrapper">
        {Data.map((item) => {
          return (

         
            <Accordion key={item.key}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.subDescription}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul className="subItemss">
                    {item.subItems.map((everySubItem) => {
                      return <li>{everySubItem.subItem}</li>;
                    })}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}{" "}
      </div>
    </>
  );
}
