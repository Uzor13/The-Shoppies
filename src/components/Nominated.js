import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
//Bootstrap
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import Container from "react-bootstrap/cjs/Container";
import Button from "react-bootstrap/cjs/Button";
import Badge from "react-bootstrap/cjs/Badge";

//Image
import NotFound from '../assets/img/undraw_empty_xct9.svg';

//Component
import NominationsAlert from "./ui/NominationsAlert";
import 'react-confirm-alert/src/react-confirm-alert.css';


const Nominated = ({movie}) => {
    const {nominations, removeMovieFromNominations} = useContext(GlobalContext);
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <p className='text-center mt-4' style={{fontSize: '24px'}}>Your Nominations</p>
                <h5 style={{marginTop: '9px'}}>
                    <Badge variant="info" className='mt-4 ml-3'>
                        {nominations.length} {nominations.length === 1 ? 'Nomination' : 'Nominations'}
                    </Badge>
                </h5>
            </div>

            {nominations.length >= 5 ? <Container>
                <Row>
                    <Col>
                        <NominationsAlert/>
                    </Col>
                </Row>
            </Container> : null}
            {nominations.length > 0 ?
                <ul className='movie-grid'>
                    {nominations.map((movie) => (
                        <li key={movie.imdbID} className='list-unstyled'>
                            <Container>
                                <Row>
                                    <Col>
                                        <Card bg='dark' className='shadow mb-3 mt-2' style={{width: '18rem'}}>
                                            {/*<Card.Img variant="top" src={movie.Poster} alt={movie.Title}/>*/}
                                            <Card.Body style={{textAlign: "center"}}>
                                                <Card.Title>
                                                    <h3>{movie.Title}</h3>
                                                </Card.Title>
                                                <Card.Text>
                                                    ({movie.Year})
                                                </Card.Text>
                                                <Button
                                                    onClick={() => removeMovieFromNominations(movie.imdbID)}
                                                    style={
                                                        {
                                                            backgroundColor: '#F86D4E',
                                                            borderColor: 'transparent'
                                                        }}
                                                >
                                                    Remove
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </li>
                    ))}
                </ul> : <div>
                    <div className='d-flex justify-content-center mt-5'>
                        <img src={NotFound} className='search-img' alt="not found"/>
                    </div>
                    <p className='text-capitalize text-center'>No movies nominated, search and add some!</p>
                </div>

            }

        </div>
    );

};

export default Nominated;