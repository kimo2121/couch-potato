import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FAQTypes } from "./types";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./FAQ.css";
const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "16px",
    fontFamily: "Audiowide cursive",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "transparent",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: "white",
    margin: "30px 0",
    marginBottom: -1,
    minHeight: 89,
    paddingRight: "50px",
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <MdOutlineKeyboardArrowDown
                size="50"
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              What happens when I mint a Couch Potato?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When you mint a Couch Potato the original Wallet that minted will
              recieve 7% LIFETIME ROYALTIES on our Upcoming NFT Marketplace*.
              You also recieve Exclusive access to our private dicord, where our
              community members will be rewarded weekly!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <MdOutlineKeyboardArrowDown
                size="50"
                className={expanded === "panel2" ? "arrow active" : "arrow"}
              />
              Where does my NFT go after I buy a Couch Potato?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Whenever a Couch Potato is minted it is automatically sent to your
              wallet. After you connect your wallet and have sucessfully minted
              a Couch Potato, you may be able to view your Cryptographically
              Proven Random NFT in the collectables section!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <MdOutlineKeyboardArrowDown
                size="50"
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              What Can I do with My Couch Potatoes?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Anything you want, You can list your Potato for sale on our
              upcoming maketplace, or you can Hodl as many as you like. Holders
              will recieve 3% HOLDERS REWARDS from Buys and Sells on our
              upcoming marketplace!* The more Couch Potatoes you HODL in your
              sack the bigger the portion of Fees!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <MdOutlineKeyboardArrowDown
                size="50"
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              What’s Next?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Checkout our Roadmap! We will be releasing a marketplace where
              Couch Potato Hodler's will recieve a 3% Share of platform Fees. We
              plan on Doing City Wide Take-Overs, Giveaways and Much Much More!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
