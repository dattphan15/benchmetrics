import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row , Col , Card } from 'react-bootstrap';
const Overview=(props)=>
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
  <Card.Header>Sessions (Site Traffic)</Card.Header>
    <Card.Body>
      <h2>{ getCardData('Sessions (Site Traffic)','metrics_count') } |  
      { (  getCardData('Sessions (Site Traffic)','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Sessions (Site Traffic)','percentile') } </span> 

      :<span class="text-success" > { getCardData('Sessions (Site Traffic)','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Ypur performance from last week {  getCardData('Sessions (Site Traffic)','week_change') }</p>
      
    </Card.Body>
  </Card>

  <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Avg. Pages Viewed</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Avg. Pages Viewed','metrics_count') } |  
      { (  getCardData('Avg. Pages Viewed','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Avg. Pages Viewed','percentile') } </span> 

      :<span class="text-success" > { getCardData('Avg. Pages Viewed','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Ypur performance from last week {  getCardData('Avg. Pages Viewed','week_change') }</p>
    </Card.Body>
  </Card>

  <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Avg. Time on Site</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Avg. Time on Site','metrics_count') } |  
      { (  getCardData('Avg. Time on Site','week_change').includes('-') ) ? <span class="text-danger"> { getCardData('Avg. Time on Site','percentile') } </span> 

      :<span class="text-success" > { getCardData('Avg. Time on Site','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Ypur performance from last week {  getCardData('Avg. Time on Site','week_change') }</p>
    </Card.Body>
  </Card>

   <Card border="secondary" style={{ width: '16rem' }}>
  <Card.Header>Bounce Rate</Card.Header>
    <Card.Body>
    <h2>{ getCardData('Bounce Rate','metrics_count') } |  
      { (  getCardData('Bounce Rate','week_change').includes('-') ) ? <span className="text-danger"> { getCardData('Bounce Rate','percentile') } </span> 

      :<span className="text-success" > { getCardData('Bounce Rate','percentile') }  </span> 

      }
      
      </h2>
      
        <p>Ypur performance from last week {  getCardData('Bounce Rate','week_change') }</p>
    </Card.Body>
  </Card> 

  </Row>
</Container>
  </>
  );
}
export default Overview;