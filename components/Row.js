import { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className='container'>
        {this.props.children}
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            margin-left: 10vw;
            margin-right: 10vw;
          }
          @media only screen and (max-width: 680px) {
            .container {
              display: block;
              margin: 0;
            }
          }
        `}</style>
      </div>
    )
  }
}