import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

export default function Info() {
  return (
<div className='nnnn'><h1 className="govno">Історія жанру аніме</h1>
<br /><br />  
<img src="30.webp" className='imgg' />
<h5 className="ani">Історія а́німе: розпочалася на початку XX ст., коли японські кінематографісти експериментували з анімацією, різні методи чого в той час розглядалися на Заході. У 1970-х швидко розвивалося аніме, відокремлюючи себе від своїх західних коренів, а також створювалися різні жанри, таких як меха і його піджанр про гігантських роботів. 
</h5>
<h2 className='jio'>Основні досягнення
</h2>
<h5 className='tyu'>Аніме здобуло світове визнання як унікальна форма мистецтва, що поєднує глибокі сюжети з вражаючим візуальним стилем. Воно стало потужним культурним експортом Японії, вплинувши на моду, музику, і навіть індустрію відеоігор у багатьох країнах. Завдяки таким хітам, як Naruto, Spirited Away і Attack on Titan, аніме утвердилось як серйозне медіа, здатне передавати складні ідеї й емоції. 
</h5>
<Row style={{marginTop:"30px", justifyContent:"center"}} className="gap-4">
<Card style={{ width: '18rem' }} className='RTTT'>
      <Card.Img variant="top" src="Shipuden.webp" />
      <Card.Body>
        <Card.Title>Naruto <br/>Shippuuden
</Card.Title>
        <Card.Text>
          сенен-манга Масасі Кісімото, яка розповідає про життя галасливого і непосидючого ніндзя-підлітка Наруто Удзумакі, який мріє досягти загального визнання і стати Хокаге - главою свого селища і найсильнішим ніндзя.

        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='RTTT'>
      <Card.Img variant="top" src="spirit.jpg" />
      <Card.Body>
        <Card.Title>Spirited <br/> away
</Card.Title>
        <Card.Text>
          повнометражний аніме-фільм режисера Хаяо Міядзакі, знятий на студії "Гіблі" в 2001. Прем'єра фільму у Японії відбулася 20 липня 2001 року, а Росії 31 грудня 2002 року.

        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="gey.jpg" />
      <Card.Body>
        <Card.Title>Attack <br/>of titan
</Card.Title>
        <Card.Text>
          японська постапокаліптична манга, написана та ілюстрована Хадзіме Ісаямою. Випускалася у щомісячному журналі Bessatsu Shonen Magazine японського видавництва «Коданся» з жовтня 2009 року до квітня 2021 року.

        </Card.Text>
     
      </Card.Body>
    </Card>
</Row>
</div>
  )
}
