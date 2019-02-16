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
            And just raise cain. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. See how easy it is to create a little tree right in your world. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. Let your heart take you to wherever you want to be. Don't forget to tell these special people in your life just how special they are to you. See. We take the corner of the brush and let it play back-and-forth. You gotta think like a tree. Little trees and bushes grow however makes them happy. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.
          </Text>
          <Text>
            Clouds are free they come and go as they please. I'm a water fanatic. I love water. Let's make a happy little mountain now. It looks so good, I might as well not stop. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. These little son of a guns hide in your brush and you just have to push them out. You can get away with a lot. Now we'll take the almighty fan brush. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer.
          </Text>
          <Text>
            Just let your mind wander and enjoy. This should make you happy. We'll make some happy little bushes here. Let's put a touch more of the magic here. Let that brush dance around there and play. Here's another little happy bush Talent is a pursued interest. That is to say, anything you practice you can do. Let's build some happy little clouds up here. We have a fantastic little sky!
          </Text>
          <Text>
            All those little son of a guns. You better get your coat out, this is going to be a cold painting. This is a fantastic little painting. Let's do it again then, what the heck. Every highlight needs it's own personal shadow. This is gonna be a happy little seascape. Just think about these things in your mind - then bring them into your world. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. Nice little clouds playing around in the sky. Even the worst thing we can do here is good.
          </Text>
          <Text>
            You got your heavy coat out yet? It's getting colder. Let your heart be your guide. It's important to me that you're happy. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. Trees live in your fan brush, but you have to scare them out. So often we avoid running water, and running water is a lot of fun. Mountains are so simple, they're hard. You have to make almighty decisions when you're the creator. Let's go up in here, and start having some fun
          </Text>
          <Text>
          This is the way you take out your flustrations. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. We don't want to set these clouds on fire. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. It's a good way of getting rid of all your anxieties and hostilities. Don't hurry. Take your time and enjoy. The little tiny Tim easels will let you down. Let's do that again.
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