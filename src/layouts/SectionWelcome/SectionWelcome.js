import React from "react";
import SectionWelcomeStyled from "./styles/SectionWelcomeStyled";
import SeparatorStyled from "./styles/SeparatorStyled";
import SubtitleStyled from "./styles/SubtitleStyled";
import Title from "../../components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const SectionWelcome = () => (
  <SectionWelcomeStyled>
    <Title>
      <FontAwesomeIcon icon={faReact} /> React Dev Directory
    </Title>
    <SeparatorStyled />
    <SubtitleStyled>
      The React Dev Directory is a comprehensive list of blogs & sites covering
      React development.
    </SubtitleStyled>
  </SectionWelcomeStyled>
);

export default SectionWelcome;
