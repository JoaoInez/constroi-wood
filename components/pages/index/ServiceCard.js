import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { P } from "../../ui";

const Card = styled.div`
  margin: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px ${({ theme }) => theme.lightShadow};
  border-radius: 0 0 6px 6px;
  overflow: hidden;
  min-width: 250px;
  max-width: 300px;
  border-top: 6px solid ${({ theme }) => theme.blue};
  flex: 1;

  .card-header,
  .card-content {
    width: 100%;
  }

  .card-header {
    padding: 20px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-content {
    padding: 10px 10px 20px;
    height: 100%;

    ${P} {
      margin: 5px 0;
    }
  }
`;

const ServiceCard = ({ children }) => <Card>{children}</Card>;

ServiceCard.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ServiceCard;
