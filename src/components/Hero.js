import React from 'react';

function Hero(props) {
  return (
    <div>Hero
    {/* <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
          <Container fluid='true'>
            <Row className='justify-content-center'>
              <Col md={8}>
                {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}
                {props.subTitle && <h3 className='display-4 font-weight-light'>{props.subTitle}</h3>}
                {props.text && <h3 className='lead font-weight-light'>{props.text}</h3>}
              </Col>
            </Row>
          </Container>
        </Jumbotron> */}
    </div>
  );
}

export default Hero;
