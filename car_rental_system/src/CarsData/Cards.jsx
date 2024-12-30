import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>Brand:{props.Brand}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>price:{props.price}</Card.Text>
        <Card.Text>Range:{props.range}</Card.Text>
        <Card.Text>Engine:{props.engine}</Card.Text>
       
        <Button variant="primary">Book Now </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;