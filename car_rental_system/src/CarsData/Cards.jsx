import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./carData.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

function Cards(props) {
  return (
    <div style={{border:"2px solid green"}}>
    <Card style={{ width: '40rem', height:"90vh" }}>
      <Card.Img variant="top" src={props.image}  style={styleimage} className='cardimage'/>
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
    </div>
 
  );
}
const styleimage= {
  height: '50vh',
  width: '100%',
  // border:"2px solid   red",
  // borderRadius:"32px 30px 55px 30px",
  objectFit: 'cover',
  // display:"none"

}
const maindiv = {
 color:"red",
 display:"flex",
 

}

export default Cards;