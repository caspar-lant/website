import { Component } from 'react'
import Brand from '../../components/Brand'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Footer from '../../components/Footer'

export default class extends Component {
  render() {
    return (
      <div>
        <Brand />
        <article>
          <Heading>Case Studies - Spectrometer Modeling</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend magna lacus, ut iaculis massa iaculis eu. Nullam id vestibulum urna, quis aliquet tellus. Nunc sagittis justo sit amet sagittis efficitur. Donec interdum sagittis lectus, a consectetur ante convallis quis. Mauris commodo euismod metus id ultrices. Sed sit amet velit sit amet turpis auctor pulvinar. Aliquam a risus sit amet leo dapibus dignissim. Curabitur condimentum iaculis massa, in fringilla sapien sollicitudin id.
          </Text>
          <Text>
            Integer id nibh in neque pharetra suscipit. Maecenas turpis massa, commodo at nibh non, ultrices cursus turpis. Aliquam auctor nisl est, sed posuere nisi tincidunt ac. Quisque velit enim, posuere ac tortor sit amet, blandit bibendum mi. Aenean euismod, odio vitae pretium mollis, arcu risus feugiat libero, a hendrerit augue lorem a ante. Nulla facilisi. Nam mollis erat nunc, non hendrerit enim pellentesque et. Sed elementum mattis pretium. Sed nec malesuada ipsum. Etiam a metus a nulla interdum hendrerit vel nec lorem. In vitae dui facilisis, luctus leo vel, vulputate arcu.
          </Text>
          <Text>
            Aliquam sit amet felis mi. Maecenas fringilla dignissim elit, sed pulvinar risus consequat vel. Phasellus vestibulum mi a sapien ornare, id fringilla odio maximus. Nunc mollis, metus vitae vestibulum lobortis, nunc magna consequat magna, vel mollis purus dolor sed purus. Nam sagittis malesuada sagittis. Aliquam feugiat eu metus nec vulputate. Proin non libero sit amet nulla eleifend vehicula sed sed ex. Phasellus vitae sollicitudin urna. Nullam aliquam ante et ligula vehicula ultrices. Curabitur sed nibh porttitor, laoreet est quis, tincidunt dui. Nullam vitae cursus ex. Morbi sit amet mauris pellentesque, interdum tortor vel, tristique metus. Vivamus lacus est, ultricies sed nulla in, faucibus finibus libero. Pellentesque vitae aliquet nulla, non pretium nunc. Praesent nec ornare libero.
          </Text>
          <Text>
            Pellentesque malesuada mauris sit amet sem congue, eu bibendum quam fermentum. Nullam vehicula pulvinar fermentum. Donec mollis ultrices velit non feugiat. Proin at purus id nisl ultrices ornare. Vestibulum id interdum purus, ac condimentum dolor. Proin justo nulla, fermentum vel aliquam id, feugiat quis ex. Phasellus vitae nisi quam.
          </Text>
          <Text>
            Maecenas porta turpis sem, a commodo odio eleifend ac. Duis pulvinar magna vitae bibendum sodales. Suspendisse ante odio, dignissim sit amet diam quis, tincidunt venenatis tortor. Etiam condimentum purus nunc, ac tempus lectus interdum vitae. Nullam porta lorem augue, vel maximus risus malesuada nec. Cras aliquam ornare est, non pulvinar purus molestie sed. Donec volutpat eget diam eleifend tincidunt. Nunc turpis mi, vestibulum et venenatis in, bibendum ut mi. In molestie lobortis eros, ac vehicula risus ornare eget. Donec tincidunt, justo vitae lacinia egestas, ante tortor ornare tortor, nec consequat libero risus ac mi. Ut urna est, auctor nec auctor ac, vehicula vel augue. Nam condimentum accumsan semper.
          </Text>
        </article>
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