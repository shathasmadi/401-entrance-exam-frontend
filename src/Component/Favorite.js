import axios from 'axios'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateFavorite from './UpdateFavorite';


 class Favorite extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favData: [],

        }
    }



    componentDidMount = () => {
        axios.get(`localhost:8090/favorite`).then(response => {
            this.setState({
                favData:response.data,
            })
        })
    }


    deleteFavorite = (value) => {
        let name=req.params;
        axios.get(`localhost:8090/favorite/${name}`);
        this. componentDidMount();
    }


    updateFavorite = (value,inputUser) => {
        let id=req.params;
        let reqBody={
            inputUser:value.strDrinkThumb,
        }
        axios.put(`localhost:8090/favorite/${id}`,reqBody)
        this. componentDidMount();
    }






    render() {
        return (
            <>
                {this.state.favData.map(value => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={value.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{value.strDrink}</Card.Title>
                                <Card.Text>
                                    {value.idDrink}
                                </Card.Text>
                                <Button variant="primary" onClick={(this.deleteFavorite(value))}>Delete</Button>
                                <UpdateFavorite

                                    value={value}
                                    updateFavorite={this.UpdateFavorite}

                                />


                            </Card.Body>
                        </Card>

                    )
                })

                }
            </>
        )
    }
}
export default Favorite;
