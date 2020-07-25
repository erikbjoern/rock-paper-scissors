import React from 'react'
import {Grid, Header} from 'semantic-ui-react'

const HotkeysSheet = () => {
  return (
    <Grid className="hotkeysSheet" centered>
      <Grid.Row><Header as="h2" style={{color: "#cdffcd"}}>Hotkeys</Header></Grid.Row>
      <Grid.Row className="gridRows">
        <Grid.Column  width={4}><Header as="h4" style={{color: "#cdffcd"}}>Left player</Header></Grid.Column>
        <Grid.Column  width={4}><Header as="h4" style={{color: "#cdffcd"}}>Right player</Header></Grid.Column>
      </Grid.Row>
      <Grid.Row className="gridRows">
        <Grid.Column  width={2}>1</Grid.Column>
        <Grid.Column  width={2}>Rock</Grid.Column>
        <Grid.Column  width={2}>ArrowLeft</Grid.Column>
      </Grid.Row>
      <Grid.Row className="gridRows">
        <Grid.Column  width={2}>2</Grid.Column>
        <Grid.Column  width={2}>Paper</Grid.Column>
        <Grid.Column  width={2}>ArrowUp</Grid.Column>
      </Grid.Row>
      <Grid.Row className="gridRows">
        <Grid.Column  width={2}>3</Grid.Column>
        <Grid.Column  width={2}>Scissors</Grid.Column>
        <Grid.Column  width={2}>ArrowRight</Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HotkeysSheet