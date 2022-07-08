import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row , Col , Card } from 'react-bootstrap';

const Site=(props)=>
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
  <Card.Header>Users</Card.Header>
    <Card.Body>
      <h2>{ getCardData('Users','metrics_count') } |  
      { (  getCardData('Users','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Users','percentile') } </span> 

      :<span class="text-success" > { getCardData('Users','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Users','week_change') }</p>
      
    </Card.Body>
  </Card>

  <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Two or More Sessions</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Two or More Sessions','metrics_count') } |  
      { (  getCardData('Two or More Sessions','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Two or More Sessions','percentile') } </span> 

      :<span class="text-success" > { getCardData('Two or More Sessions','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Two or More Sessions','week_change') }</p>
    </Card.Body>
  </Card>

  <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Internal Page Entries</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Internal Page Entries','metrics_count') } |  
      { (  getCardData('Internal Page Entries','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Internal Page Entries','percentile') } </span> 

      :<span class="text-success" > { getCardData('Internal Page Entries','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Internal Page Entries','week_change') }</p>
    </Card.Body>
  </Card>

   <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Sessions > 1 Min.</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Sessions > 1 Min.','metrics_count') } |  
      { (  getCardData('Sessions > 1 Min.','week_change').includes('-') ) ? <span className="text-danger"> { getCardData('Sessions > 1 Min.','percentile') } </span> 

      :<span className="text-success" > { getCardData('Sessions > 1 Min.','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Your performance from last week {  getCardData('Sessions > 1 Min.','week_change') }</p>
    </Card.Body>
  </Card> 

  </Row>
</Container>
  </>
  );
}
export default Site;