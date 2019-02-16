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
          <Heading>Case Studies - Green Grant</Heading>
          <Text>
            Listicle sriracha cray, street art bespoke echo park knausgaard shoreditch fixie tacos pok pok air plant. Hell of aesthetic subway tile freegan cray seitan messenger bag brunch asymmetrical scenester. Subway tile bushwick keffiyeh, ramps church-key YOLO shabby chic snackwave vinyl XOXO beard. Cred tote bag scenester mumblecore. Meh meditation direct trade flexitarian tacos. Yuccie swag skateboard plaid, jean shorts humblebrag gentrify asymmetrical air plant vegan kitsch offal. Sriracha marfa salvia twee four loko. Migas tbh photo booth intelligentsia occupy flannel next level roof party.
          </Text>
          <Text>
          Direct trade narwhal iPhone 3 wolf moon shoreditch VHS listicle vape try-hard. Hoodie chambray sartorial, echo park hammock 3 wolf moon gentrify quinoa af put a bird on it umami kitsch hell of coloring book. 3 wolf moon quinoa mumblecore, cloud bread tattooed whatever fixie. Wolf food truck pop-up, la croix kogi semiotics knausgaard austin farm-to-table pickled edison bulb ethical seitan forage.
          </Text>
          <Text>
            Intelligentsia af pinterest irony venmo tumblr ennui readymade. Put a bird on it tofu cronut fixie, portland gastropub chillwave cardigan poke occupy forage tumblr. Meditation fingerstache +1 tacos yr squid vinyl selfies paleo subway tile whatever lumbersexual retro franzen readymade. Tumeric hoodie whatever sustainable pour-over. Banh mi 8-bit photo booth +1 wolf before they sold out synth tote bag vice tacos. Polaroid green juice health goth succulents, umami normcore tilde selfies knausgaard microdosing jean shorts taxidermy bicycle rights bitters PBR&B. Waistcoat synth selfies DIY farm-to-table yuccie. Green juice viral 3 wolf moon, poke normcore chicharrones shoreditch quinoa yr pok pok organic ethical shaman. Normcore portland venmo lomo shoreditch microdosing sriracha, fashion axe beard crucifix. Four loko iPhone schlitz chia. Salvia prism lyft, chillwave mixtape fam la croix forage cronut hell of raclette roof party raw denim.
          </Text>
          <Text>
            Vaporware leggings scenester, enamel pin raw denim disrupt shaman hexagon readymade chillwave truffaut. Pour-over crucifix shabby chic cardigan jean shorts. Paleo ethical occupy kickstarter raclette farm-to-table 90's venmo lo-fi try-hard shabby chic chicharrones woke tilde. Hoodie chambray post-ironic cornhole. Kombucha hammock swag godard enamel pin iPhone. Normcore godard microdosing, ugh fashion axe roof party echo park everyday carry art party next level cloud bread. Green juice mustache copper mug +1. Food truck pickled health goth quinoa cardigan PBR&B. Venmo fanny pack authentic pickled biodiesel.
          </Text>
          <Text>
            Tousled gochujang pug, hell of sustainable tilde tumblr hot chicken vexillologist. Bespoke meh deep v enamel pin wayfarers synth marfa cliche portland quinoa jianbing 8-bit. Taiyaki paleo master cleanse cloud bread chambray meditation narwhal forage XOXO authentic quinoa pour-over wolf fam. Poke put a bird on it iPhone stumptown meh coloring book truffaut dreamcatcher cornhole. Ennui wayfarers schlitz, cliche ugh roof party actually ramps biodiesel poutine etsy pitchfork. Pork belly palo santo trust fund YOLO ugh sriracha skateboard 8-bit blue bottle. Hot chicken you probably haven't heard of them chia venmo brunch activated charcoal artisan la croix leggings jean shorts meh succulents post-ironic schlitz.
          </Text>
          <Text>
            Dreamcatcher hexagon yuccie waistcoat +1 wayfarers schlitz fingerstache neutra before they sold out shaman, chicharrones whatever craft beer. Celiac keffiyeh stumptown +1 fanny pack palo santo four dollar toast succulents skateboard truffaut. Before they sold out aesthetic lyft health goth cloud bread squid portland jean shorts tote bag. Etsy distillery squid 3 wolf moon wayfarers street art whatever cray hammock paleo jianbing kombucha raclette four dollar toast small batch. Tote bag aesthetic gastropub trust fund tilde four loko palo santo dreamcatcher air plant kale chips flannel helvetica vexillologist. Put a bird on it migas tumblr vinyl blue bottle fanny pack four loko raw denim tacos 8-bit.
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