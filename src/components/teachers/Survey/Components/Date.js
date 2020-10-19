import React from 'react'
import {TextField} from '@material-ui/core'


function Date () {
    
return(
    <div >
        <TextField
              id="date"
              type="date"
              defaultValue="2020-01-01"
              style={{width:'50%',margin:'2em 0'}}
              disabled
        />
    </div>)
}

export default Date;