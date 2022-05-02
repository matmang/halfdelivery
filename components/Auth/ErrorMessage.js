import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";
import { height } from "../../utils";

const StyledText = styled.Text`
  align-items: flex-start;
  font-family: "gothica1-regular";
  font-size: 12px;
  margin-top: ${height * 3}px;
  color: ${colors.errorPink};
`;

const ErrorMessage = ({ message }) => {
  return <StyledText>{message}</StyledText>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
