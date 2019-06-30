import React from "react";
import SectionWelcomeStyled from "./styles/SectionWelcomeStyled";
import SeparatorStyled from "./styles/SeparatorStyled";
import SubtitleStyled from "./styles/SubtitleStyled";
import ButtonsContainerStyled from "./styles/ButtonsContainerStyled";
import Title from "../../components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import SeeMoreStyled from "./styles/SeeMoreStyled";
import MainWelcomeContainer from "./styles/MainWelcomeContainer";
import ChevronIconStyled from "./styles/ChevronIconStyled";

const SectionWelcome = () => (
  <SectionWelcomeStyled>
    <MainWelcomeContainer>
      <Title>
        <FontAwesomeIcon icon={faReact} /> React Dev Directory
      </Title>
      <SeparatorStyled />
      <SubtitleStyled>
        The React Dev Directory is a comprehensive list of blogs & sites
        covering React development.
      </SubtitleStyled>
      <ButtonsContainerStyled>
        <Button
          variant="secondary"
          onClick={() => console.log("How to contribute clicked")}
        >
          <FontAwesomeIcon icon={faGithub} /> How to contribute
        </Button>
        <Button
          variant="secondary"
          onClick={() => console.log("About button clicked")}
        >
          About
        </Button>
      </ButtonsContainerStyled>
    </MainWelcomeContainer>
    <SeeMoreStyled>
      <ChevronIconStyled icon={faChevronDown} />
    </SeeMoreStyled>
  </SectionWelcomeStyled>
);

export default SectionWelcome;
