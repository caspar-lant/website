import { Component } from 'react'
import generateColor from 'string-to-color'
import Link from 'next/link'

export default class extends Component {
  render() {
    return (
      <Link href={`/case/${this.props.title.replace(/\s/g, '-').toLowerCase()}`}>
        <button className='container'>
          <div className='internal'>
            <h2>{this.props.title}</h2>
          </div>
          <style jsx>{`
            .container {
              background-color: #444444;
              background-image: url('/static/images/${this.props.title.replace(/\s/g, '-').toLowerCase()}.${this.props.jpeg ? 'jpg' : 'png'}');
              background-size: cover;
              background-position: center;
              flex: 1;
              cursor: pointer;
              margin: 0;
              padding: 0;
              border: none;
              outline: none;
              transition: box-shadow 150ms ease;
              width: 100%;
            }
            .container:focus {
              box-shadow: 0 0 8px rgba(81, 203, 238, 1)
            }
            .internal {
              padding-top: 6rem;
              padding-bottom: 6rem;
              text-align: center;
              color: #ffffff;
              background-color: ${generateColor(this.props.title)};
              opacity: 0;
              transition: opacity 150ms ease;
            }
            .container:hover .internal {
              opacity: 0.8;
            }
            .internal h2 {
              margin: 0;
              font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
              font-weight: normal;
            }
            @media only screen and (max-width: 780px) {
              .internal {
                opacity: 0.8;
              }
            }
          `}</style>
        </button>
      </Link>
    )
  }
}