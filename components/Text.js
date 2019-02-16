import { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <p>
        {this.props.children}
        <style jsx>{`
          p {
            font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
            font-weight: normal;
            margin: 0 10vw 20px 10vw;
          }
        `}</style>
      </p>
    )
  }
}