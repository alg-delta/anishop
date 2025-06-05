import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product({product, add}) {
  return (
    <Card style={{ width: '18rem', border: '3px solid red', padding: 0}}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.text}
      </Card.Text>
      <Card.Text>
        {product.price}$
      </Card.Text>
      <Button variant="info" onClick={()=> add(product)}>Купити</Button>
    </Card.Body>
  </Card>
  )
}
