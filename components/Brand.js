import { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
  render() {
    return (
      <>
        <Link href='/'>
          <a title='Go home'>Caspar.cc</a>
        </Link>
        <style jsx>{`
          a {
            font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
            font-weight: bold;
            margin: 30px 10vw 0 10vw;
            cursor: pointer;
            outline: none;
            transition: box-shadow 150ms ease;
            display: inline-block;
            text-decoration: none;
            color: #000000;
            font-size: 2em;
          }
          a:focus {
            box-shadow: 0 0 8px #51cbee
          }
        `}</style>
      </>
    )
  }
}