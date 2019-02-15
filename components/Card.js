import { Component } from 'react'
import generateColor from 'string-to-color'

export default class extends Component {
  render() {
    return (
      <figure className='container'>
        <figcaption>
          <h2>{this.props.title}</h2>
        </figcaption>
        <style jsx>{`
          .container {
            background-color: #444444;
            background-image: url('/static/images/${this.props.title.replace(/\s/g, '-').toLowerCase()}.${this.props.jpeg ? 'jpg' : 'png'}');
            background-size: cover;
            background-position: center;
            flex: 1;
            cursor: pointer;
            margin: 0;
          }
          figcaption {
            padding-top: 5rem;
            padding-bottom: 5rem;
            text-align: center;
            color: #ffffff;
            background-color: ${generateColor(this.props.title)};
            opacity: 0;
            transition: opacity 150ms ease;
          }
          .container:hover figcaption {
            opacity: 0.8;
          }
          figcaption h2 {
            margin: 0;
            font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
            font-weight: normal;
          }
          @media only screen and (max-width: 780px) {
            figcaption {
              opacity: 0.8;
            }
          }
        `}</style>
      </figure>
    )
  }
}