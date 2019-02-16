import { Component } from 'react'
import Row from '../components/Row'
import Card from '../components/Card'
import Brand from '../components/Brand'
import Heading from '../components/Heading'
import Text from '../components/Text'
import Footer from '../components/Footer'
import Action from '../components/Action'

export default class extends Component {
  render() {
    return (
      <div>
        <Brand />
        <section>
          <Heading>Case Studies</Heading>
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
        </section>
        <section>
          <Heading>About Me</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend magna lacus, ut iaculis massa iaculis eu. Nullam id vestibulum urna, quis aliquet tellus. Nunc sagittis justo sit amet sagittis efficitur. Donec interdum sagittis lectus, a consectetur ante convallis quis. Mauris commodo euismod metus id ultrices. Sed sit amet velit sit amet turpis auctor pulvinar. Aliquam a risus sit amet leo dapibus dignissim. Curabitur condimentum iaculis massa, in fringilla sapien sollicitudin id.
          </Text>
          <Text>
            Integer id nibh in neque pharetra suscipit. Maecenas turpis massa, commodo at nibh non, ultrices cursus turpis. Aliquam auctor nisl est, sed posuere nisi tincidunt ac. Quisque velit enim, posuere ac tortor sit amet, blandit bibendum mi. Aenean euismod, odio vitae pretium mollis, arcu risus feugiat libero, a hendrerit augue lorem a ante. Nulla facilisi. Nam mollis erat nunc, non hendrerit enim pellentesque et. Sed elementum mattis pretium. Sed nec malesuada ipsum. Etiam a metus a nulla interdum hendrerit vel nec lorem. In vitae dui facilisis, luctus leo vel, vulputate arcu.
          </Text>
          <Action link='/static/downloads/cv.pdf'>Download My CV</Action>
        </section>
        <Footer />
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