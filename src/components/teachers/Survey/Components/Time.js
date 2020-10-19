import React from 'react'
import {TextField} from '@material-ui/core'


function Time () {
    
return(
    <div>
        <TextField
              id="time"
              type="time"
              defaultValue="00:00"
              style={{width:'50%',margin:'2em 0'}}
              disabled
        />
    </div>)
}

export default Time;