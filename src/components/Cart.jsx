import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Cart({cartItems, add, remove}) {
const totalPrice = cartItems.reduce(
  (sum, product) => sum + product.price*product.number, 0
)

const zamovity = () => (
  alert("Дякую за замовлення")
)
  return (
    <Alert variant="warning">
      <Alert.Heading>Корзина</Alert.Heading>
      {cartItems.length === 0 && <p>Корзина порожня</p> }
     <table width="100%">
      <tr>
        <td width="25%">назва</td>
        <td width="25%">кількість</td>
        <td width="25%">ціна</td>
        <td width="25%">сума</td>
        </tr>
        {cartItems.map(product=>
          <tr key={product.id}>
          <td width="25%">{product.name}</td>
          <td width="25%">
          <Button onClick={()=>remove(product)} variant="outline-dark">-</Button>
            {product.number}
            <Button onClick={()=>add(product)}variant="outline-info">+</Button>
            </td>
          <td width="25%">{product.price}$</td>
          <td width="25%">{product.price*product.number}$</td>
          </tr>
        )}
     </table>
      <hr />
      <p className="mb-0">
        Сума до сплати {totalPrice}$
        
      </p>
<p>
{cartItems.length > 0 &&<Button variant="outline-info" onClick={zamovity} >Замовити</Button>}
      </p>
    </Alert>
  )
}
