import { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <footer>
        Copyright &copy; {new Date().getFullYear()} Caspar Lant
        <style jsx>{`
          footer {
            font-family: 'Circular Std', 'Helvetica', 'Arial', 'sans-serif';
            font-weight: normal;
            background: #f4f4f4;
            padding: 75px 0;
            text-align: center;
            margin-top: 36px;
          }
        `}</style>
      </footer>
    )
  }
}