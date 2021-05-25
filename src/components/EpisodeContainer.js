import React from 'react'
import { useSelector } from 'react-redux';
import { Alert, BDiv, BP, BImg, BSpan } from 'bootstrap-4-react';
import * as dayjs from 'dayjs'

const EpisodeContainer = () => {

  const replacementError = useSelector(appstate => appstate.replacementError)
  const seasons = useSelector(appstate => appstate.seasons)
  const episodes = useSelector(appstate => appstate.episodes)

  function getFormatedDate(date) {
    return dayjs(date).format('MMM D, YYYY')
  }

  function getCleanSummaryStringMax270chars(summary) {
    if(summary) {
      if(summary.length > 270) {
        return summary.replace( /(<([^>]+)>)/ig, '').substring(0, 270) + '...'
      }
      return summary.replace( /(<([^>]+)>)/ig, '');
    } else return ''
  }

    return (
      <BDiv>
        {replacementError ? <Alert danger>There is no matching record for the episode, season and show provided.</Alert> : ''}
        {seasons.map((season,i) =>
          <BDiv key={i} value={i+1}>
            <h3>Season {season}</h3>
            <BDiv display="flex" pb="2" style={{borderBottom: '1px solid #dee2e6'}}>
              <BP text="secondary" display="flex" mb="0">
                {episodes && episodes.filter(episode => episode.season === i+1).length}
                <BSpan mx="1"> Episodes</BSpan>
                {episodes && episodes.filter(episode => episode.season === i+1)[0] && episodes.filter(episode => episode.season === i+1)[0].airdate ? ` | Aired on ${getFormatedDate(episodes.filter(episode => episode.season === i+1)[0].airdate)}` : ''}
              </BP>
            </BDiv>
            {episodes
              .filter(episode => episode.season === i+1)
              .map((episode, j) => 
                <BDiv key={j} value={j+1} display="flex" my="4" >
                  {
                    episode.image && episode.image.medium
                  ?
                    <BImg src={episode.image.medium}/>
                  :
                    <BDiv
                      className="text-white bg-secondary"
                      style={{height: '150px', width: '250px', fontSize: '30px'}}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <BP>
                        NA
                      </BP>
                    </BDiv>
                  }
                  <BDiv ml="4">
                    <h5>
                      Episode {episode.number}
                    </h5>
                    <BDiv display="flex">
                      <BP text="secondary">
                        {`Season ${i+1} | `}
                        Episode {episode.number}
                        {episode.airdate ? ` | ${getFormatedDate(episode.airdate)}` : ''}
                      </BP>
                    </BDiv>
                    <BP mb="0"style={{fontSize: '15px'}}>
                      {episode.summary ? getCleanSummaryStringMax270chars(episode.summary) : ''}
                    </BP>
                  </BDiv>
                </BDiv>
              )}
          </BDiv>
        )}
      </BDiv>             
    )
}

export default EpisodeContainer;