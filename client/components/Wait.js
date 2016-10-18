import React, { PropTypes } from 'react';
import {Link} from 'react-router'

 const Wait = ({link}) => {
   return (
     <div>
       <h1>Send this link to the second player: http://localhost:3000/{link}</h1>
     </div>
   )
 }

 export default Wait
