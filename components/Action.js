import { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <a href={this.props.link} target='_blank'>
        {this.props.children}
        <style jsx>{`
          a {
            background-color: transparent;
            cursor: pointer;
            margin: 10px 10vw 0 10vw;
            display: inline-block;
            padding: 14px;
            border: 1px solid #000000;
            border-radius: 7px;
            transition: box-shadow 150ms ease, background-color 150ms ease, color 150ms ease;
            text-decoration: none;
            color: #000000;
            font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
            font-weight: normal;
          }
          a:hover {
            background-color: #000000;
            color: #ffffff;
          }
          a:focus {
            box-shadow: 0 0 8px rgba(81, 203, 238, 1)
          }
        `}</style>
      </a>
    )
  }
}