import React, {useContext, useState} from 'react';

//Components
import MovieCard from '../components/ui/MovieCard';
import {css} from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

//Bootstrap
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/cjs/Form";
import Col from "react-bootstrap/cjs/Col";

//Style
import '../components/style/Search.css';
//Image
import NoSearch from '../assets/img/undraw_the_search_s0xf.svg'
import NominationsAlert from "./ui/NominationsAlert";

import {GlobalContext} from "../context/GlobalState";

const Search = () => {
    //States
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    //context
    const {nominations} = useContext(GlobalContext);
    const onChange = async (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        setLoading(true);
        const url = `http://www.omdbapi.com/?s=${e.target.value}&type=movie&apikey=9f23257c`;
        const response = await fetch(url);
        const resJSON = await response.json();
        if (resJSON.Search) {
            setResults(resJSON.Search);
        }
        setLoading(false);
    }
    const override = css`
  display: block;
  margin: 20px auto;
`;
    return (
        <Container style={{marginTop: '25px', marginBottom: '20px'}}>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            type="search"
                            placeholder="Search for Movies"
                            value={query}
                            onChange={onChange}
                            autocomplete='off'
                        />
                    </Form.Group>
                    {nominations.length >= 5 ? <Container>
                        <Row>
                            <Col>
                                <NominationsAlert/>
                            </Col>
                        </Row>
                    </Container> : null}
                    <CircleLoader loading={loading} color='#F86D4E' css={override} size={150}/>
                    {results.length > 0 ? (
                        <ul className='movie-grid'>
                            {results.map((movie) => (
                                <li key={movie.imdbID} className='list-unstyled mb-3 mt-3'>
                                    <MovieCard movie={movie}/>
                                </li>
                            ))}
                        </ul>
                    ) : <div>
                        <div className='d-flex justify-content-center mt-5'>
                            <img src={NoSearch} className='search-img mt-5' alt=""/>
                        </div>
                        <p className='text-center mt-2'>Waiting to search...</p>
                    </div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Search;