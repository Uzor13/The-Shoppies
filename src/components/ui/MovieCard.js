import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";

//Bootstrap
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";

//Image
import Placeholder from '../../assets/img/undraw_images_aef7.svg'
import {confirmAlert} from "react-confirm-alert";


const MovieCard = ({movie}) => {
    const {addMovieToNominations, nominations, removeMovieFromNominations} = useContext(GlobalContext);

    let storedMovie = nominations.find(o => o.imdbID === movie.imdbID);

    const submit = () => {
        confirmAlert({
            title: 'Confirm to remove',
            message: 'Are you sure you want to remove nomination?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => removeMovieFromNominations(movie.imdbID)
                },
                {
                    label: 'No',
                    onClick: () => removeMovieFromNominations()
                }
            ]
        });
    };

    
    const nominationsDisabled = !!storedMovie;
    return (
        <Container>
            <Row>
                <Col>
                    <Card bg='dark' className='shadow' style={{width: '18rem'}}>
                        {/*{ movie.Poster ?*/}
                        {/*    <Card.Img variant="top" src={movie.Poster} alt=''/>*/}
                        {/*    : (<Card.Img src={Placeholder} variant='top'/>)*/}
                        {/*}*/}

                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Title>
                                <h3>{movie.Title}</h3>
                            </Card.Title>
                            <Card.Text>
                                <h5>({movie.Year})</h5>
                            </Card.Text>
                            <Button
                                className='mr-3'
                                onClick={() => addMovieToNominations(movie)}
                                disabled={nominationsDisabled}
                                style={
                                    {
                                        backgroundColor: '#F86D4E',
                                        borderColor: 'transparent'
                                    }}>
                                Nominate
                            </Button>
                            {nominationsDisabled ? <Button
                                onClick={() => submit()}
                                style={
                            {
                                backgroundColor: '#F86D4E',
                                borderColor: 'transparent'
                            }}
                                >
                                Remove
                                </Button> : null}

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieCard;

