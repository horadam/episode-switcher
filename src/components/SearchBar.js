import React, { useState, useEffect } from 'react'
import { BDiv, InputGroup, Form, Button } from 'bootstrap-4-react';
import { searchShow, searchRandomShow } from '../actions/actions'

const SearchBar = () => {

  const [showSearched, setShowSearched] = useState('')

  useEffect(() => {
    searchRandomShow()
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    searchShow(showSearched);
    setShowSearched('');
  }

    return (
          <BDiv
             w="100"
             p="3"
             mb="1"
             bg="dark"
             text="white"
             display="flex"
             justifyContent="center"
             alignItems="center"
          >
            <h2 style={{marginRight: '10em'}}>
              Episode Switcher
            </h2>
            <Form w="20" onSubmit={handleSubmit}>
              <InputGroup>
                <Form.Input
                  type="text"
                  placeholder="Enter a TV show"
                  onChange={e => setShowSearched(e.target.value)}
                  value={showSearched}
                />
                  <InputGroup.Append>
                    <Button type="submit" secondary>
                      Search
                    </Button>
                  </InputGroup.Append>
              </InputGroup>
            </Form>
          </BDiv>              
    )
}

export default SearchBar;