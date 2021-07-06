import axios from 'axios'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



 class Main extends  React.Component {
  constructor(props){
      super(props)
      this.state={
          data:[],
      }
  }

  

componentDidMount=()=>{
    axios.get(`localhost:8090/data`).then(response=>{
        this.setState({
            data:response.data,
        })
    })
}


addData=(value)=>{
   let reqBody={
       strDrink:name,
       strDrinkThumb:strDrinkThumb,
       idDrink:idDrink,

   }
   axios.post(`localhost:8090/data`,reqBody);
}

    render() {
        return (
            <>
            {this.state.data.map(value=>{
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{value.strDrink}</Card.Title>
                      <Card.Text>
                       {value.idDrink}
                      </Card.Text>
                      <Button variant="primary" onClick={(this.addData(value))}>Add To Favorite</Button>
                    </Card.Body>
                  </Card>

                )
            })

            }
            </>
        )
    }
}

export default Main;
