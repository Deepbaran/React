import React from 'react';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          price: Rs. {product.productPrice}
        </CardText>
        <Button
          className="rounded-circle"
          color="success"
          onClick={() => addInCart(product)}
        >
          +
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
