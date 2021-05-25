import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BDiv, Form, Button, InputGroup } from 'bootstrap-4-react';
import { replaceEpisode } from '../actions/actions'

const EpisodeReplaceBar = () => {

  const seasons = useSelector(appstate => appstate.seasons)
  const episodes = useSelector(appstate => appstate.episodes)

  const [selectedSeason, setSelectedSeason] = useState(1)
  const [selectedEpisode, setSelectedEpisode] = useState(1)
  const [replaceBy, setReplaceBy] = useState('')

  function setSeason(e) {
    console.log(e.target.value)
    setSelectedSeason(parseInt(e.target.value));
  }

  function setEpisode(e) {
    setSelectedEpisode(e.target.value);
  }

  function handleReplace(e) {
    e.preventDefault();
    console.log(replaceBy, selectedSeason, selectedEpisode)
    replaceEpisode(replaceBy, parseInt(selectedSeason), parseInt(selectedEpisode), episodes);

  }

    return (
                    <BDiv
                       w="80"
                       mt="5"
                       mb="4"
                       display="flex"
                       justifyContent="between"
                       alignItems="center"
                    >
                      Replace
                      <Form display="flex" mb="0">
                      <Form.Group mr="4" mb="0">
                          <Form.Select
                          onChange={e => setSeason(e)}>
                            {seasons.map((season,i) =>
                              <option key={i} value={i+1}>Season {season}</option>
                            )}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group mb="0">
                          <Form.Select onChange={e => setEpisode(e)}>
                            {episodes
                              .filter(episode => episode.season === parseInt(selectedSeason))
                              .map((episode, i) => 
                                <option key={i} value={i+1}>Episode {episode.number}</option>
                              )} 
                          </Form.Select> 
                        </Form.Group>
                      </Form>
                      with
                      <Form w="50" display="flex"
                      onSubmit={e => handleReplace(e)}
                      >
                        <InputGroup>
                          <Form.Input
                            mr="4"
                            type="text" 
                            onChange={e => setReplaceBy(e.target.value)} 
                            value={replaceBy}
                          />
                            <Button
                              px="5" 
                              type="submit" dark
                            >
                              Replace
                            </Button>
                        </InputGroup>
                      </Form>
                     
                    </BDiv>
    )
}

export default EpisodeReplaceBar;