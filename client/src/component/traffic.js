import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row , Col , Card } from 'react-bootstrap';

const Traffic=(props)=>
{

  const { cardData} = props
  const getCardData = (cardname,type) => {
    
    if(cardData.length ==0 ) return '';
    let data = cardData.filter((e)=>{ return e.metrics_name == cardname });

    return data[0][type]

  }

  return (
    <>
    
    <Container>
  <Row md={4}>
   
  <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Direct Traffic</Card.Header>
    <Card.Body>
      <h2>{ getCardData('Direct Traffic','metrics_count') } |  
      { (  getCardData('Direct Traffic','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Direct Traffic','percentile') } </span> 

      :<span class="text-success" > { getCardData('Direct Traffic','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Direct Traffic','week_change') }</p>
      
    </Card.Body>
  </Card>

  <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Organic Search</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Organic Search','metrics_count') } |  
      { (  getCardData('Organic Search','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Organic Search','percentile') } </span> 

      :<span class="text-success" > { getCardData('Organic Search','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Organic Search','week_change') }</p>
    </Card.Body>
  </Card>

  <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Social Traffic</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Social Traffic','metrics_count') } |  
      { (  getCardData('Social Traffic','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Social Traffic','percentile') } </span> 

      :<span class="text-success" > { getCardData('Social Traffic','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Social Traffic','week_change') }</p>
    </Card.Body>
  </Card>

   <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Referral Traffic</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Referral Traffic','metrics_count') } |  
      { (  getCardData('Referral Traffic','week_change').includes('-') ) ? <span className="text-danger"> { getCardData('Referral Traffic','percentile') } </span> 

      :<span className="text-success" > { getCardData('Referral Traffic','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Referral Traffic','week_change') }</p>
    </Card.Body>
  </Card> 

  </Row>
</Container>
  </>
  );

}
export default Traffic;