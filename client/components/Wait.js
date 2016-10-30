import React, { PropTypes } from 'react';
import {Link} from 'react-router'
import ClipboardButton from 'react-clipboard.js';

 const Wait = ({roomId, handleClick}) => {
   const generatedLink = `${window.location.host}/${roomId}`
   return (
     <div className='wait__wrap'>
     <div className='wait__container'>
          <h1 className='wait__preloader'>
            <span>Waiting</span>
            <span className="Loader-ellipsis" >
              <span className="Loader-ellipsisDot">.</span>
              <span className="Loader-ellipsisDot">.</span>
              <span className="Loader-ellipsisDot">.</span>
            </span>
          </h1>
       <div className='wait__text'>Send this link to the second player</div>
       <div className='wait__text' style={{color:'green'}}><b>{generatedLink}</b>
        <ClipboardButton className='wait__copy-button' data-clipboard-text={generatedLink}>
                  Copy link
        </ClipboardButton>
       </div>
     </div>
    </div>
   )
 }

 export default Wait
