import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FooterItem({ Data }) {
  return (
    <>
      <div className="Wrap">
        <Container>

          
        </Container>
        <div className="MobileFooterWrapper">
          {Data.map((item) => {
            return (
              <Accordion key={item.key} className="FooterAccordion">
                <AccordionSummary
                  className="FooterAccordionSummary"
                  expandIcon={<ExpandMoreIcon className="FooterAccordionIcon" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="FooterSubDescription" >{item.subDescription}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography> */}
                    <ul className="FooterSubItems">
                      {item.subItems.map((everySubItem) => {
                        return <li>{everySubItem.subItem}</li>;
                      })}
                    </ul>
                  {/* </Typography> */}
                </AccordionDetails>
              </Accordion>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
}
