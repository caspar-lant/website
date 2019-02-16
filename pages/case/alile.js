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
          <Heading>Case Studies - ALILE</Heading>
          <Text>
            Captain, why are we out here chasing comets? I'd like to think that I haven't changed those things, sir. Not if I weaken first. Mr. Crusher, ready a collision course with the Borg ship. This is not about revenge. This is about justice. Our neural pathways have become accustomed to your sensory input patterns. We could cause a diplomatic crisis. Take the ship into the Neutral Zone Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Some days you get the bear, and some days the bear gets you. Did you come here for something in particular or just general Riker-bashing? I can't. As much as I care about you, my first duty is to the ship. We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Sorry, Data. What? We're not at all alike! Mr. Worf, you sound like a man who's asking his friend if he can start dating his sister. Flair is what marks the difference between artistry and mere competence.
          </Text>
          <Text>
            I can't. As much as I care about you, my first duty is to the ship. They were just sucked into space. What's a knock-out like you doing in a computer-generated gin joint like this? Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. Is it my imagination, or have tempers become a little frayed on the ship lately? I'll be sure to note that in my log. We could cause a diplomatic crisis. Take the ship into the Neutral Zone The Federation's gone; the Borg is everywhere! For an android with no feelings, he sure managed to evoke them in others. Besides, you look good in a dress. Mr. Worf, you do remember how to fire phasers? Computer, lights up! I think you've let your personal feelings cloud your judgement. The unexpected is our normal routine. Your head is not an artifact! Travel time to the nearest starbase? Yes, absolutely, I do indeed concur, wholeheartedly!
          </Text>
          <Text>
            They were just sucked into space. What's a knock-out like you doing in a computer-generated gin joint like this? Yesterday I did not know how to eat gagh. Not if I weaken first. About four years. I got tired of hearing how young I looked. I think you've let your personal feelings cloud your judgement. I'm afraid I still don't understand, sir. Wouldn't that bring about chaos? I'd like to think that I haven't changed those things, sir. Your head is not an artifact! We have a saboteur aboard. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. This should be interesting. I'll be sure to note that in my log. What? We're not at all alike! Captain, why are we out here chasing comets? I recommend you don't fire until you're within 40,000 kilometers. Computer, lights up! That might've been one of the shortest assignments in the history of Starfleet.
          </Text>
          <Text>
            Why don't we just give everybody a promotion and call it a night - 'Commander'? Now, how the hell do we defeat an enemy that knows us better than we know ourselves? I'd like to think that I haven't changed those things, sir. Your head is not an artifact! Fear is the true enemy, the only enemy. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. For an android with no feelings, he sure managed to evoke them in others. The unexpected is our normal routine. The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules.
          </Text>
          <Text>
            Well, I'll say this for him - he's sure of himself. Maybe we better talk out here; the observation lounge has turned into a swamp. Sure. You'd be surprised how far a hug goes with Geordi, or Worf. Flair is what marks the difference between artistry and mere competence. I'm afraid I still don't understand, sir. And blowing into maximum warp speed, you appeared for an instant to be in two places at once. Fate. It protects fools, little children, and ships named "Enterprise." Your shields were failing, sir. Now we know what they mean by 'advanced' tactical training. Shields up! Rrrrred alert! Mr. Worf, you sound like a man who's asking his friend if he can start dating his sister. Yes, absolutely, I do indeed concur, wholeheartedly! The game's not big enough unless it scares you a little. Wouldn't that bring about chaos? I'll alert the crew.
          </Text>
          <Action link='/static/downloads/alile.pdf'>Download PDF</Action>
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