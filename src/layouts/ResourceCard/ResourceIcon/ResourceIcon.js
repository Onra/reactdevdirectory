import React from "react";
import ResourceIconStyled from "./styles/ResourceIconStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResourceIcon = ({ icon }) => (
  <ResourceIconStyled>
    <FontAwesomeIcon icon={icon} />
  </ResourceIconStyled>
);

export default ResourceIcon;
