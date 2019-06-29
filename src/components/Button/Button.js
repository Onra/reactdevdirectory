import React from "react";
import PropTypes from "prop-types";
import PrimaryButtonStyled from "./styles/PrimaryButtonStyled";
import SecondaryButtonStyled from "./styles/SecondaryButtonStyled";

const VARIANTS = Object.freeze({ PRIMARY: "primary", SECONDARY: "secondary" });

const propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([VARIANTS.PRIMARY, VARIANTS.SECONDARY])
};

const defaultProps = {
  variant: VARIANTS.PRIMARY
};

const Button = ({ onClick, variant, children }) => {
  switch (variant) {
    case VARIANTS.PRIMARY:
    default:
      return (
        <PrimaryButtonStyled onClick={onClick}>{children}</PrimaryButtonStyled>
      );
    case VARIANTS.SECONDARY:
      return (
        <SecondaryButtonStyled onClick={onClick}>
          {children}
        </SecondaryButtonStyled>
      );
  }
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
