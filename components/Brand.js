import { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
  render() {
    return (
      <>
        <Link href='/'>
          <h1>Caspar.cc</h1>
        </Link>
        <style jsx>{`
          h1 {
            font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
            font-weight: bold;
            margin-left: 10vw;
            margin-right: 10vw;
            margin-bottom: 30px;
            cursor: pointer;
          }
        `}</style>
      </>
    )
  }
}