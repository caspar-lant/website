import { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <>
        <h1>{this.props.children}</h1>
        <style jsx>{`
          h1 {
            font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
            font-weight: bold;
            margin: 40px 10vw 25px 10vw;
            font-size: 2.3em;
          }
        `}</style>
      </>
    )
  }
}