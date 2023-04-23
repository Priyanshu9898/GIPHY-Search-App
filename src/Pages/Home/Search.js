import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "../../styles/search.css";
import axios from "axios";
import Loader from "../../components/Loader";
import "../../styles/style.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const limit = 20;

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=${limit}&offset=${offset}`
      );
      setGifs(response.data.data);
      setLoading(false);
    };

    fetchTrendingGifs();
  }, [offset]);

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=${limit}&offset=${offset}`
      );
      setGifs(response.data.data);
      setLoading(false);
    };

    if (search) {
      fetchGifs();
    }
  }, [search, offset]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePagination = (newOffset) => {

    if(newOffset < 0){
        setDisablePrevious(true)
    }
    if(newOffset > 0){
        setDisablePrevious(false);
    }
    setOffset(newOffset);
  };

  return (
    <>
      <Container className="containerSearch mb-5">
        <Form>
          <InputGroup className="mb-3 mt-5">
            <FormControl
              aria-label="Search"
              className="inputSearch mx-3"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search for GIFs..."
            />
            {/* <Button id="button-addon2">Search</Button> */}
          </InputGroup>
        </Form>

        <div className="btnContainer mb-5 mt-5">
            <Button className="btnStyle" disabled={disablePrevious} onClick={() => handlePagination(offset - limit)}>
                Previous
            </Button>
            <Button className="btnStyle" onClick={() => handlePagination(offset + limit)}>
                Next
            </Button>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div>
            {gifs.map((gif) => (
              <img
                key={gif.id}
                src={gif.images.fixed_height.url}
                alt={gif.title}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Search;
