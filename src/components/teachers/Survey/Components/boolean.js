import React from 'react'
import {Grid,Typography,Switch} from '@material-ui/core'

function BooleanType () {
    return(
        <div>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>TRUE</Grid>
              <Grid item>
                <Switch disabled/>
              </Grid>
                <Grid item>FALSE</Grid>
              </Grid>
            </Typography>
          </div>
    )
}

export default BooleanType;