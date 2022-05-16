

export default function FooterItem({ Data }) {
  return (
    <>
      <div className="He">
        <div className="MobileFooterWrapper">
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
                    <ul className="FooterItems">
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
      </div>
    </>
  );
}
