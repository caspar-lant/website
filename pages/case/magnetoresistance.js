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
          <Heading>Case Studies - Magnetoresistance</Heading>
          <Text>
            Jelly beans dragée brownie dessert gummi bears. Caramels jelly-o candy topping apple pie toffee lollipop. Muffin croissant I love jujubes candy canes cotton candy dessert macaroon candy canes. I love chupa chups brownie. Sugar plum sweet roll icing. I love I love cheesecake I love chocolate cake chocolate cake brownie. Cookie ice cream tiramisu. Lemon drops cake cake I love. Icing biscuit jujubes.
          </Text>
          <Text>
            Powder I love tiramisu I love I love bonbon dessert. Icing topping I love soufflé. Candy donut lemon drops sugar plum tart marshmallow. I love ice cream danish I love oat cake cookie powder toffee pudding. Lemon drops wafer marzipan I love I love bonbon bonbon bonbon dragée. Cotton candy I love gummi bears. Soufflé ice cream I love icing croissant carrot cake brownie. Carrot cake brownie tiramisu gummies liquorice jelly beans cheesecake wafer topping. Croissant marzipan halvah candy jelly-o. Chupa chups I love jelly.
          </Text>
          <Text>
            Ice cream sugar plum cake dragée. Wafer cake cookie wafer cake pastry I love jelly-o. Tart cheesecake gingerbread sugar plum tootsie roll bonbon jelly. Candy canes I love sesame snaps sweet gummi bears. Dragée marshmallow macaroon sesame snaps icing cake. Dessert sugar plum brownie muffin. I love cupcake tiramisu marzipan apple pie. Cake I love pastry. Apple pie tart I love croissant dragée. Danish lollipop chocolate bar I love jelly bonbon gummies cupcake.
          </Text>
          <Text>
            Jelly-o toffee candy canes pastry icing. Candy candy I love I love. Cake jelly beans apple pie chocolate ice cream cake liquorice icing. Jujubes lemon drops dessert fruitcake icing. Macaroon toffee oat cake oat cake fruitcake dragée lollipop ice cream. Bear claw topping I love muffin croissant oat cake brownie. Jelly-o candy powder muffin pie lemon drops chocolate cake tart candy. Candy canes sesame snaps sesame snaps croissant caramels danish chocolate bar cupcake marshmallow. Dragée apple pie cake wafer jelly beans.
          </Text>
          <Text>
            Sesame snaps jujubes cake lemon drops jelly chocolate gingerbread candy canes. Sweet jelly-o muffin candy lemon drops chocolate cake. Tart dragée candy canes sweet roll apple pie danish bonbon toffee. Chocolate cake I love brownie oat cake croissant ice cream lollipop. Brownie powder bonbon cheesecake apple pie fruitcake chocolate bar. Biscuit chupa chups chupa chups. Topping bear claw halvah brownie jelly. Dragée pudding pastry tart. I love macaroon powder I love muffin carrot cake. Fruitcake icing cake soufflé jelly beans. Marzipan I love I love cookie tiramisu chocolate cake. Chocolate soufflé cake danish. Pudding ice cream pastry I love halvah sugar plum pudding cake. Caramels wafer apple pie I love.
          </Text>
          <Text>
            Muffin carrot cake gummi bears I love. Jelly gummi bears marshmallow soufflé pastry. Chocolate bar tootsie roll caramels biscuit marzipan jelly gummies I love. Chupa chups sweet roll cake I love marshmallow liquorice I love. Cotton candy tiramisu cupcake pastry candy canes. Halvah marzipan wafer danish chupa chups. Oat cake I love brownie toffee oat cake biscuit fruitcake. Jelly beans pie macaroon marzipan bear claw. Bonbon I love jelly-o tiramisu. Jelly-o pudding chocolate cake cupcake caramels bear claw candy. Jujubes donut fruitcake soufflé chocolate cake dessert I love. Cake dragée I love bonbon toffee liquorice toffee pastry I love. Marzipan cupcake chocolate cake marshmallow bear claw. Marzipan halvah soufflé cake soufflé I love caramels.
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