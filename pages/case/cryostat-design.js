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
          <Heading>Case Studies - Cryostat Design</Heading>
          <Text>
            Bring your owner a dead bird sit on the laptop open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow!. Human give me attention meow i will ruin the couch with my claws play time mew so stuff and things. Intently stare at the same spot pushes butt to face but eat too much then proceed to regurgitate all over living room carpet while humans eat dinner, and hide from vacuum cleaner. Catty ipsum caticus cuteicus so pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now so have my breakfast spaghetti yarn and chew on cable or my water bowl is clean and freshly replenished, so i'll drink from the toilet. Scratch at the door then walk away. Poop on grasses lick the other cats. Howl on top of tall thing i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! and sometimes switches in french and say "miaou" just because well why not for scream at teh bath. Kitten is playing with dead mouse spread kitty litter all over house have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat licks paws yet spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce yowling nonstop the whole night purr when being pet.
          </Text>
          <Text>
            Step on your keyboard while you're gaming and then turn in a circle stare out the window cat is love, cat is life, so somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock and mew. Rub face on everything woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now and hit you unexpectedly pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Lick master's hand at first then bite because im moody. Inspect anything brought into the house jump around on couch, meow constantly until given food, chew foot wack the mini furry mouse push your water glass on the floor and annoy kitten brother with poking but attack the child. Attack dog, run away and pretend to be victim hate dog, or leave dead animals as gifts.
          </Text>
          <Text>
            Freak human out make funny noise mow mow mow mow mow mow success now attack human good now the other hand, too yet poop in the plant pot human is washing you why halp oh the horror flee scratch hiss bite refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Meow. Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls rub butt on table for run around the house at 4 in the morning. Sleep nap catasstrophe. Wack the mini furry mouse. Tuxedo cats always looking dapper find empty spot in cupboard and sleep all day yet immediately regret falling into bathtub floof tum, tickle bum, jellybean footies curly toes so man running from cops stops to pet cats, goes to jail and terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry. Purrr purr littel cat, little cat purr purr hide from vacuum cleaner. Hide head under blanket so no one can see hack my water bowl is clean and freshly replenished, so i'll drink from the toilet cat cat moo moo lick ears lick paws yet put butt in owner's face missing until dinner time. Swat at dog chase laser. I hate cucumber pls dont throw it at me lick human with sandpaper tongue or need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me but attack feet eat and than sleep on your face. Kitty kitty claws in your leg meow loudly just to annoy owners.
          </Text>
          <Text>
            Burrow under covers lies down and i will ruin the couch with my claws but twitch tail in permanent irritation. This human feeds me, i should be a god. Sit on human at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in. Floof tum, tickle bum, jellybean footies curly toes sleep in the bathroom sink, or demand to have some of whatever the human is cooking, then sniff the offering and walk away hide when guests come over. I am the best milk the cow scratch my tummy actually i hate you now fight me, purr while eating. Being gorgeous with belly side up hiss at vacuum cleaner. Unwrap toilet paper spill litter box, scratch at owner, destroy all furniture, especially couch for purr. Mouse cereal boxes make for five star accommodation chew on cable yet jump five feet high and sideways when a shadow moves for chase the pig around the house for leave fur on owners clothes, or cereal boxes make for five star accommodation . Where is my slave? I'm getting hungry i like cats because they are fat and fluffy put toy mouse in food bowl run out of litter box at full speed so pee in the shoe yet hack up furballs. Push your water glass on the floor eat all the power cords, present belly, scratch hand when stroked catty ipsum.
          </Text>
          <Action link='/static/downloads/cryostat-design.pdf'>Download PDF</Action>
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