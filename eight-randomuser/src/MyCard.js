import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large} // ? is for query and for multiple options we need to use it.
          // If an API infromation too much nested then use the ?
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="p-2">{details.name?.title}</span>
            <span className="p-2">{details.name?.first}</span>
            <span className="p-2">{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.location?.city}
          <p>{details.phone}</p>
          <p>{details.email}</p>
          <p>{details.dob?.age}</p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
