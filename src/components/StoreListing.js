import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function StoreListing(){
return (
    <div>
    <h2>Browse stores in Houston</h2>
    <Container>
      <Row md={4}>
        
        <Col>
        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"></Image>
        <br></br>
        Delivery * Pickup
        </Col>
        
        <Col xs={6}>
            <Image src ="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png"></Image>
            <br></br>
            Delivery * Pickup
            </Col>

        <Col>
        <Image src ="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png"></Image>
        <br></br>
        Delivery
        </Col>
      </Row>
      
      
      <Row md={4}>
        <Col>
        <Image src ="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/2208/a6393e93-11c5-4fd4-9fd9-5a6edd70ca7e.png"></Image>
        <br></br>
        Delivery
        </Col>
        
        <Col xs={6}>
        <Image src ="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/352/ccc727b7-ba99-477d-8170-450fdb3307ef.jpg"></Image>
        <br></br>
            Delivery
            </Col>
        
        <Col>
        <Image src ="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"></Image>
        <br></br>
        Delivery
        </Col>
      </Row>
    </Container>
    </div>
)
}

export default StoreListing