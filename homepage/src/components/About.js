import Card from 'react-bootstrap/Card'
        import Container from 'react-bootstrap/Container'

export default function About () {
    return (
    
        
        <Container>
            <Card border="info" >
                <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Text
                    </Card.Text>
                    <Card.Text>
                        Text
                    </Card.Text>
                    <Card.Text>
                        Text
                    </Card.Text>
                    <Card.Text>
                       Text
                    </Card.Text>
                </Card.Body>
                <Card.Img style={{ width: '50%', margin: '0 auto'}}  variant="bottom" src="hotsprings.jpg" />
            </Card>
        </Container>
        
    )
}