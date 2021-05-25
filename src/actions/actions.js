import store from '../store'
import Axios from 'axios'

const base_url = 'https://api.tvmaze.com';

export function searchRandomShow() {
  const randomShowId = Math.floor(Math.random() * 55535) + 1
  const getRandomShowUrl = `${base_url}/shows/${randomShowId}?embed=episodes`;

  store.dispatch({type: 'REQUEST_INITIATED'})

  Axios.get(getRandomShowUrl)
    .then(resp => {
      store.dispatch({
        type: 'GET_SHOW_SUCCESS',
        payload: resp.data
      })
    })
  .catch(err => {
      store.dispatch({
          type: 'GET_SHOW_ERROR',
          payload: err
      })
  })
}

export function searchShow(show) {
  const getIdUrl = `${base_url}/search/shows?q=${show}`;

  store.dispatch({type: 'REQUEST_INITIATED'})

  Axios.get(getIdUrl)
    .then(resp => {
        const showId = resp.data[0].show.id
        return showId
    })
    .then(showId => {
      const getShowDetailsAndEpisodesUrl = `${base_url}/shows/${showId}?embed=episodes`;

      Axios.get(getShowDetailsAndEpisodesUrl)
        .then(resp => {
          store.dispatch({
            type: 'GET_SHOW_SUCCESS',
            payload: resp.data
          })
        })
    })
    .catch(err => {
        store.dispatch({
            type: 'GET_SHOW_ERROR',
            payload: err
        })
    })
}

export function replaceEpisode(show, season, episodeNumber) {
  const getShowDetailsAndEpisodesUrl = `${base_url}/singlesearch/shows?q=${show}&embed=episodes`;

  store.dispatch({type: 'REQUEST_INITIATED'})

  Axios.get(getShowDetailsAndEpisodesUrl)
    .then(resp => {
        store.dispatch({
          type: 'GET_REPLACED_EPISODE_SUCCESS',
          payload: resp.data._embedded.episodes.filter(episode => episode.season === season && episode.number === episodeNumber)[0]          
        }) 
    })
    .catch(err => {
      store.dispatch({
          type: 'GET_REPLACED_EPISODE_ERROR'
      })
  })
}