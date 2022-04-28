import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

class FeaturedProducts extends Component {
     render() {
          return (
              <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>FEATURED PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim2.flixcart.com/image/416/416/jwaztzk0/toy-weapon/u/r/u/hot-fire-soft-bullet-toy-gun-7036-bluekart-online-original-imafdpffqutx3jch.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Hot Fire Gun (Cross Blue, 64gm)</p>
          <p className="product-price-on-card">Price : $100</p>

          </Card.Body>
          </Card>
     </Col>



     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim2.flixcart.com/image/416/416/jpinjbk0/puzzle/j/u/f/1-high-speed-rubic-cube-3x3x3-by-shree-exim-hmc-original-imafbqkjskdbekpt.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Fast Rubicks Cube</p>
          <p className="product-price-on-card">Price : $25</p>

          </Card.Body>
          </Card>
     </Col>

     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim2.flixcart.com/image/416/416/knknc7k0/stacking-toy/f/o/5/junior-stacking-ring-toys-for-kids-little-s-original-imag27whhtxf9pgu.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Stacking Ring Toys (Multi Color, 100gm)</p>
          <p className="product-price-on-card">Price : $20</p>

          </Card.Body>
          </Card>
     </Col>


     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim2.flixcart.com/image/416/416/kdvzwcw0/toy-sport/u/z/g/big-size-supeir-quality-heavy-duty-neon-bowling-set-with-10-pins-original-imafuzhgrm9y8zex.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Bowling set for kids (Multi-Color, 400gm)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
     </Col>


     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim2.flixcart.com/image/612/612/l1nwnm80/toy-weapon/e/v/x/toy-gun-heavens-collection-original-imagd6sqqfbbbzpx.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Toy Gun for kids (Cross Black, 64 Gm)</p>
          <p className="product-price-on-card">Price : $12</p>

          </Card.Body>
          </Card>
     </Col>


     <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
     <Card className="image-box card">
          <img className="center" src="https://rukminim2.flixcart.com/image/416/416/kqfj1jk0/spin-press-launch-toy/g/u/p/fidget-spinner-four-bearing-camouflage-printed-blue-premsons-original-imag4fzzshz7zfwr.jpeg?q=70" />   
          <Card.Body> 
          <p className="product-name-on-card">Fidget Spinner (White), 50gm)</p>
          <p className="product-price-on-card">Price : $10</p>

          </Card.Body>
          </Card>
     </Col>


</Row>


                   </Container>
              </Fragment>
          )
     }
}
export default FeaturedProducts



                  