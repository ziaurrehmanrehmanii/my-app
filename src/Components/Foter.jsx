import React from 'react'
import { useContext } from 'react'
import MainContext from '../Context/MainContext'

export default function Fotter() {
    const {state} = useContext(MainContext);
    return (
        <div>
            <h1>Footer</h1>
            <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {state.map((todo, index) => (
            <tr key={index}>
              <td>{todo.userName}</td>
              <td>{todo.password}</td>
            </tr>
          ))}
        </tbody>
      </table></div>
    )
}
