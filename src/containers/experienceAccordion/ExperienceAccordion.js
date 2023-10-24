import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => (
          <div key={section["title"]}>
            <div
              className="accord-panel"
              style={{
                backgroundColor: `${theme.body}`,
                border: `1px solid`,
                borderRadius: `5px`,
                borderColor: `${theme.headerColor}`,
                marginBottom: `3px`,
                fontFamily: "Google Sans Regular",
                color: `${theme.text}`,
                ":hover": {
                  color: `${theme.secondaryText}`,
                },
              }}
            >
              {/*{section["title"]}*/}
            </div>
            <div style={{ backgroundColor: `${theme.body}` }}>
              {section["experiences"].map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section["experiences"].length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
