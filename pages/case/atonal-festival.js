import { Component } from 'react'
import Brand from '../../components/Brand'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Footer from '../../components/Footer'
import Action from '../../components/Action'

export default class extends Component {
  render() {
    return (
      <div>
        <Brand />
        <article>
          <Heading>Case Studies - Atonal Festival</Heading>
          <Text>
            Bacon ipsum dolor amet drumstick tail ham hock doner chuck short ribs landjaeger picanha pork loin tri-tip buffalo short loin. Tail strip steak shankle t-bone ribeye. Jowl doner pork belly shank. Shank venison strip steak fatback buffalo capicola brisket, jowl spare ribs.
          </Text>
          <Text>
            Pork belly prosciutto capicola pork chop pork loin ground round. Bresaola ham hock alcatra jowl strip steak, sausage ham chicken bacon rump leberkas tail cow kevin. Fatback swine pastrami pork chop tenderloin. Sausage chuck meatball fatback, bacon rump pork loin pork chop cow meatloaf buffalo swine ham short loin shank. Picanha shankle buffalo ball tip rump shoulder venison. Chicken filet mignon tri-tip, drumstick chuck jerky biltong burgdoggen venison beef alcatra cupim pig ribeye. Short loin drumstick landjaeger meatball fatback. Turkey ground round alcatra, capicola hamburger sirloin tail pork pig ham hock jerky shoulder boudin. Hamburger pig rump short ribs sausage turkey shoulder t-bone.
          </Text>
          <Text>
            Chicken brisket kevin prosciutto short ribs. Cow tongue buffalo fatback picanha flank tri-tip pig sausage shankle venison turducken. T-bone tri-tip pork chop pork belly jowl shankle rump andouille ribeye. Beef doner venison leberkas meatball turducken ham shoulder rump pastrami. Jerky swine drumstick leberkas boudin chicken cupim tail sirloin beef ribs pork chop picanha frankfurter fatback. Frankfurter swine bresaola short loin bacon ham. Rump pork belly drumstick shank jowl pork loin swine sausage strip steak kevin. Buffalo tail shoulder pancetta tenderloin pork, short ribs chuck biltong tongue andouille turkey pork belly frankfurter. T-bone shankle porchetta corned beef chuck alcatra, bacon venison burgdoggen ham short ribs. Filet mignon ball tip sausage strip steak.
          </Text>
          <Text>
            Bacon ipsum dolor amet meatball ground round picanha alcatra. Sirloin biltong filet mignon, ribeye shankle pork chop turkey cow. Short ribs tri-tip rump cow buffalo. Sausage bacon sirloin shankle. Ham capicola tenderloin, chuck short loin hamburger beef ribs. Rump flank brisket pork loin. Shankle t-bone short loin, corned beef shoulder cupim picanha tail swine meatloaf buffalo. Biltong corned beef alcatra pork, porchetta pork chop ham bacon burgdoggen. Swine pastrami meatball shank ball tip meatloaf porchetta frankfurter. Ball tip landjaeger tongue frankfurter salami. Porchetta pork shank capicola tongue burgdoggen filet mignon.
          </Text>
          <Text>
            Biltong pork loin hamburger shank porchetta tail. Biltong chuck pork chop shank sausage flank ball tip. Shankle cupim pork beef ribs andouille. Chicken brisket picanha buffalo filet mignon tongue ball tip ham hock pig tri-tip shank corned beef. Pancetta shoulder sausage porchetta tri-tip pork chop. Shoulder tongue bresaola doner. Bacon spare ribs picanha pancetta pork bresaola chicken drumstick tenderloin shank pork chop rump. Pork biltong landjaeger chuck andouille turkey, pork chop ham shoulder spare ribs tongue jerky. Pastrami jowl ribeye tenderloin beef ribs, picanha meatball.
          </Text>
          <Action link='https://www.instagram.com/p/BYWDMang-Oq/?taken-by=caspie'>Go To Instagram</Action>
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