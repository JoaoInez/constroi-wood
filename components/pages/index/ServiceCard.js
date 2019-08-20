import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  margin: 30px 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 8px ${({ theme }) => theme.lightShadow};
  border-radius: 0 6px 6px 6px;
  overflow: hidden;
  min-width: 250px;
  max-width: 300px;
`;

const ServiceCard = ({ children }) => <Card>{children}</Card>;

ServiceCard.propTypes = {
  children: PropTypes.array.isRequired
};

export default ServiceCard;
