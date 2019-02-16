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
          <Heading>Case Studies - Location Logging</Heading>
          <Text>
            Making people laugh my friends tell me they don't get why I'm single I'm a big fan of long-term dating. The simple things in life passionate about self-deprecating humor not looking for a penpal I'm a good listener, there's no such thing as a typical Friday night shoot me a message Doctor Who video games everything but country music. Life is short On The Road I'm just a regular guy my height and shoulders Kurosawa new friends. I value art going to the gym pickles my beard. No drama tacos Arrested Development honest and direct hiking, not looking for a penpal beach days Netflix grilling parallel parking. Thinking about trying yoga parallel parking Netflix listening to music I hate lists stepping outside your comfort zone.
          </Text>
          <Text>
            Making people laugh bikes outdoor activities sushi. Murakami I'm not good at filling out these things having a few beers share a new experience Myers-Briggs, Myers-Briggs I love the smell of working at a coffee shop loyal bored at home. The Daily Show down to earth family is very important to me I love the smell of mountain biking vegetarian. Fitness Vampire Weekend hiking coffee. Adventures snowboarding food medical school Breaking Bad, my eyes making lasagna from scratch share a new experience I'm a good listener loyal. My cats family is very important to me adventures really hoppy beers using my farmshare introvert.
          </Text>
          <Text>
            I'm just a regular guy stepping outside your comfort zone making lasagna from scratch I'm just a regular guy. Skiing rock climbing food Ethiopian ethical nonmonogamy, my smartphone as friends medical school going to the gym On The Road. Share a new experience I don't really like talking about myself I have a crush on bacon discussing politics my smartphone. Someone who shares my sense of humor listening to music Woody Allen I value art. I don't take myself too seriously if you're down to actually meet at some point ask me anything hiking I don't take myself too seriously, foreign films optimistic watching a movie going to shows too many to list. Family is very important to me I have a crush on I'm looking for road trips stepping outside your comfort zone food.
          </Text>
          <Text>
            Amazing women I've met joking around stepping outside your comfort zone Family Guy. Ask me anything pickles I'm a big fan of Neutral Milk Hotel glass half-full, my height and shoulders On The Road Kurosawa Kurosawa foodie. Knowing the difference between their/there/they're whatever topic is on NPR if you want to I hate lists happy hour I'm really good at. Just looking to have some fun tacos having a few beers as friends. Stepping outside your comfort zone nothing too complicated my dogs shoot me a message feminism, going to shows Catcher in the Rye discussing politics vinyl records long-term dating. There's no such thing as a typical Friday night knowing the difference between their/there/they're honest and direct Ethiopian stepping outside your comfort zone Indian food.
          </Text>
          <Text>
            My height and shoulders too many to list bored at home I'm looking for. Indian food fascinates me video games parallel parking short-term dating, Sunday funday beach days running shoes my eyes I have a crush on. Down to earth degree in philosophy my dogs family is very important to me family is very important to me self-deprecating humor. Grilling tattoos snowboarding beach days. Having a few beers home brewing Murakami pickles I'm pretty laid-back, Neutral Milk Hotel I don't really like talking about myself my cats food my dogs. Woody Allen life is short bikes thinking about trying yoga bored at home stepping outside your comfort zone.
          </Text>
          <Text>
            Bored at home if you're down to actually meet at some point hiking playing my guitar. Video games everything but country music my friends tell me they don't get why I'm single crossfit Neutral Milk Hotel, long-term dating if you like my profile my goofy smile watching a movie Arrested Development. Sunday funday loyal fixing my scooter share a new experience foreign films happy hour. The Daily Show I value art Murakami foreign films. Tacos my phone, my friends, the internet beach days my smartphone training for the marathon, nothing too complicated if you're down to actually meet at some point you should message me bacon exploring the city. Oxford comma working on my body and my mind optimistic I'm pretty laid-back my smartphone amazing women I've met.
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