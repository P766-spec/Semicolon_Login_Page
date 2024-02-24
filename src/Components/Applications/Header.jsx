import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Image1 from "../Assets/image1.png";

function Header() {
  const cardsData = [
    {
      heading: "Playground",
      imageUrl: Image1,
      paragraph: "Playground to chat with multiple type of data sources",
    },
    {
      heading: "Content Assist",
      imageUrl: Image1,
      paragraph:
        "Accelerate content writing with Gen AI.Modify,rewrite and integrate quotes as per needs",
    },
    {
      heading: "PolicyWise",
      imageUrl: Image1,
      paragraph: "Comparative analysis of Insurance",
    },
    {
      heading: "EBM(Knowledge Graph)",
      imageUrl: Image1,
      paragraph: "Oncology Patient Cohort Selection",
    },
    {
      heading: "FinSight",
      imageUrl: Image1,
      paragraph: "Chat interface with neo4j kG for evidence based medicines",
    },
    {
      heading: "AssistX",
      imageUrl: Image1,
      paragraph:
        "Get detailed analysis of company's financial health with an AI analyst",
    },
    {
      heading: "TaxResearch",
      imageUrl: Image1,
      paragraph:
        "Persistent's In-house Gen-AI powered Intelligent Automation(IA) Solution-Redefining Automation, EMpowering tomorrow",
    },
    {
      heading: "ClaimsMate",
      imageUrl: Image1,
      paragraph:
        "GenAI enabled Intelligent Document Processing (IDP) for Tax Research Automation powered by knowledge graphs",
    },
    {
      heading: "WingMate",
      imageUrl: Image1,
      paragraph: "Your partner for streamlining Reimbursements",
    },
    {
      heading: "Underwriter Assistant",
      imageUrl: Image1,
      paragraph: "Your Gen AI powered SDLC companion",
    },
    {
      heading: "ProMedCheck",
      imageUrl: Image1,
      paragraph: "Perform Risk Analysis and Recommendations",
    },
    {
      heading: "ProMedCheck",
      imageUrl: Image1,
      paragraph: "Medical Review and Decisioning System ",
    },
  ];

  return (
    <div className="header_main_container">
      <div className="header">
        <div className="header_icon">
          {/* <FontAwesomeIcon icon={faSquare} style={{ color: "#ef7534" }} />{" "} */}
          <FontAwesomeIcon icon={faSquare} style={{ color: "#ef7534" }} />
        </div>
        <div className="header-content">
          {" "}
          <h1>Applications</h1>
        </div>
      </div>
      <div className="header-divider"></div>
      <div className="header_card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <h2 className="card_heading">{card.heading}</h2>
            <img
              className="card_image"
              src={card.imageUrl}
              alt="Card Image"
            />{" "}
            <p>{card.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
