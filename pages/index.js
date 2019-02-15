import { Component } from 'react'
import Row from '../components/Row'
import Card from '../components/Card'
import Brand from '../components/Brand'

export default class extends Component {
  render() {
    return (
      <div>
        <Brand />
        <Row>
          <Card title='Green Grant' />
          <Card title='Spectrometer Modeling' />
        </Row>
        <Row>
          <Card jpeg title='Atonal Festival' />
          <Card title='Cryostat Design' />
        </Row>
        <Row>
          <Card title='Location Logging' />
          <Card title='Spectroscopy' />
        </Row>
        <Row>
          <Card title='ALILE' />
          <Card jpeg title='Magnetoresistance' />
        </Row>
        <style jsx global>{`
          @font-face {
            font-family: 'Circular Std';
            src: url('/static/fonts/CircularStd-Book.otf');
            font-weight: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Circular Std';
            src: url('/static/fonts/CircularStd-Bold.otf');
            font-weight: bold;
            font-display: swap;
          }
          body {
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}