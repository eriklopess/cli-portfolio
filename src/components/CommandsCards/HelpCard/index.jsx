import React from 'react'

export default function HelpCard() {
  return (
    <>
      <div className="commands--card">
        <span>$ </span> help
      </div>
      <div className="commands--ls">
        <ul>
          <li>help - show all commands</li>
          <li>cd - open a folder</li>
          <li>ls - list all folders</li>
          <li>clear - clear console</li>
        </ul>
      </div>
    </>
  )
}
