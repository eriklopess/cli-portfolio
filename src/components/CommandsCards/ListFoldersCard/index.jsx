import React from "react";

export default function ListFolders() {
  return (
    <>
      <div className="commands--card">
        <span>$ </span> ls
      </div>
      <div className="commands--ls">
        <ul>
          <li>projects</li>
          <li>skills</li>
          <li>about</li>
        </ul>
      </div>
    </>
  );
}
