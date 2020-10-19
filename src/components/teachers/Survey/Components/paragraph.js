import React from 'react'
import {TextField} from '@material-ui/core'


function Paragraph () {
    
return(
    <div>
        <TextField 
          id="para"
          placeholder='Long-Answer text' 
          style={{width:'90%',margin:'2em 0'}} 
          disabled
        />
    </div>)
}

export default Paragraph;