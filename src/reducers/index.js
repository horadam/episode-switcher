const initialState = {
  isLoading: false,
  error: '',
  replacementError: false,
  show: {},
  showImage: '',
  genres: [],
  summary: '',
  seasons: [],
  episodes: []
}

function getCleanSummaryStringMax700chars(summary) {
  if(summary) {
    if(summary.length > 700) {
      return summary.replace( /(<([^>]+)>)/ig, '').substring(0, 700) + '...'
    }
    return summary.replace( /(<([^>]+)>)/ig, '');
  } else return ''
}

function getListOfSeasons(episodes) {
  const seasons = episodes.map(episode => {
    return episode.season
  });
  
  const filteredSeasons = seasons.filter((season, index) => {  
      return seasons.indexOf(season) === index;
    });
    
  return filteredSeasons
}

function replaceEpisodeInState(newEpisode, episodeArray) {
  let episodeToBeReplacedIndex = episodeArray.findIndex(episode => {
    if (episode.season === newEpisode.season && episode.number === newEpisode.number) {
      return true;
    } return false
  })
  
  episodeArray[episodeToBeReplacedIndex] = newEpisode;

  return episodeArray
  
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case 'REQUEST_INITIATED':
        return { ...state, error: '',
          isLoading: true
        }
      case 'GET_SHOW_SUCCESS':
          return { ...state, error: '',
            isLoading: false,
            show: action.payload, 
            showImage: action.payload.image ? action.payload.image.medium : '',
            genres: action.payload.genres,
            summary: getCleanSummaryStringMax700chars(action.payload.summary),
            seasons: getListOfSeasons(action.payload._embedded.episodes),
            episodes: action.payload._embedded.episodes
        }
      case 'GET_SHOW_ERROR':
          return { ...state,
            error: action.payload
          }
      case 'GET_REPLACED_EPISODE_SUCCESS':
          return {...state, error: '',
            isLoading: false,
            replacementError: false,
            episodes: replaceEpisodeInState(action.payload, state.episodes)
        }
      case 'GET_REPLACED_EPISODE_ERROR':
        return {...state, error: '',
          isLoading: false,
          replacementError: true,
        }
      default:
          return state
}
}