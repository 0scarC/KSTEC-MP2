import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Workouts(props) {
    const displayWorkouts = props.workouts.map((eachWorkout) => 
        <ListGroup.Item>{eachWorkout}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Workouts</Card.Title>
                    <Card.Text>
                        Try some workouts!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayWorkouts} 
                </ListGroup>
            </Card>
        </Container>
    )
}
