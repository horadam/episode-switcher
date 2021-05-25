import React from 'react'
import { useSelector } from 'react-redux';
import { Alert, BDiv, BP, BImg } from 'bootstrap-4-react';
import * as dayjs from 'dayjs'
import EpisodeReplaceBar from './EpisodeReplaceBar'
import EpisodeContainer from './EpisodeContainer'

const MainContainer = () => {

  const isLoading = useSelector(appstate => appstate.isLoading)
  const error = useSelector(appstate => appstate.error)
  const show = useSelector(appstate => appstate.show)
  const showImage = useSelector(appstate => appstate.showImage)
  const genres = useSelector(appstate => appstate.genres)
  const summary = useSelector(appstate => appstate.summary)

  function getFormatedDate(date) {
    return dayjs(date).format('MMM D, YYYY')
  }

    return (
      <BDiv>
      {error ? <Alert danger>Error loading show information.</Alert> : ''}

      {!isLoading ? 
        <BDiv
          className='MainContainer'
          w="50"
          m="auto"
        >
         <BDiv
            display="flex"
            justifyContent="start"
            style={{'marginTop': '50px', height: '300px', overflow: 'hidden'}}
            w="100"
         >
           {
             showImage
           ?
             <BImg src={showImage} alt="na" styles={{maxWidth: '25%'}}/>                                       
           :
             <BDiv
              className="text-white bg-secondary"
              style={{height: '100%', width: '100%', fontSize: '30px'}}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
               NA
            </BDiv>
           }

           <BDiv
             style={{'marginLeft': '20px'}}
           >
             <h2>
               {show.name}
             </h2>
             <BDiv
               display="flex"
               py="1"
             >
               <BP text="secondary">
                 {genres.join(', ')}
                 {genres.length && show.premiered ? ' | ' : ''}
                 {show.premiered ? `Premiered on ${getFormatedDate(show.premiered)}` : ''}
               </BP>
             </BDiv>
             <BDiv
             mt="3"
             >     
              {summary}
             </BDiv>
           </BDiv>
           
         </BDiv>
         <EpisodeReplaceBar/>
         <EpisodeContainer/>        
        </BDiv>
        : ''}
      </BDiv>
    )
}

export default MainContainer;