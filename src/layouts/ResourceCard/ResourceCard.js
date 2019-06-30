import React from "react";
import PropTypes from "prop-types";
import ResourceCardStyled from "./styles/ResourceCardStyled";
import ResourceTitleStyled from "./styles/ResourceTitleStyled";
import ResourceDescriptionStyled from "./styles/ResourceDescriptionStyled";
import ResourceIcon from "./ResourceIcon/ResourceIcon";
import ResourceContentStyled from "./styles/ResourceContentStyled";

const propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

const ResourceCard = ({ icon, title, description, link }) => (
  <ResourceCardStyled>
    {icon && <ResourceIcon icon={icon} />}
    <ResourceContentStyled>
      <ResourceTitleStyled target="_blank" href={link}>
        {title}
      </ResourceTitleStyled>
      <ResourceDescriptionStyled>{description}</ResourceDescriptionStyled>
    </ResourceContentStyled>
  </ResourceCardStyled>
);

ResourceCard.propTypes = propTypes;

export default ResourceCard;
