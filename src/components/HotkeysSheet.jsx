import React from 'react'

const HotkeysSheet = () => {
  return (
    <table className="hotkeysSheet">
      <caption style={{marginLeft: "-15px"}}>Hotkeys</caption>
      <tr>
        <th>Left player</th>
        <td></td>
        <th>Right player</th>
      </tr>
      <tr align="center">
        <td>1</td>
        <td>Rock</td>
        <td>ArrowLeft</td>
      </tr>
      <tr align="center">
        <td>2</td>
        <td>Paper</td>
        <td>ArrowUp</td>
      </tr>
      <tr align="center">
        <td>3</td>
        <td>Scissors</td>
        <td>ArrowRight</td>
      </tr>
    </table>
  )
}

export default HotkeysSheet