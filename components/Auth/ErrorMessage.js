import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const StyledText = styled.Text`
  align-items: flex-start;
  font-family: "noto-regular";
  font-size: 12;
  color: ${colors.errorPink};
`;

const ErrorMessage = ({ message }) => {
  return <StyledText>{message}</StyledText>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
