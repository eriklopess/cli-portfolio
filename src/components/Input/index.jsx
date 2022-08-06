import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import AboutCard from "../CommandsCards/AboutCard";
import HelpCard from "../CommandsCards/HelpCard";
import ListFolders from "../CommandsCards/ListFoldersCard";
import ProjectCard from "../CommandsCards/ProjectCard";
import SkillCard from "../CommandsCards/SkillsCard";
import "./style.css";

export default function Input({ commands, addCommand }) {
  const [inputText, setInputText] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    switch (inputText) {
      case "cd skills":
        addCommand([...commands, <SkillCard />]);
        setInputText("");
        break;
      case "cd projects":
        addCommand([...commands, <ProjectCard />]);
        setInputText("");
        break;
      case "cd about":
        addCommand([...commands, <AboutCard />]);
        setInputText("");
        break;
      case "clear":
        addCommand([]);
        setInputText("");
        break;
      case "ls":
        addCommand([...commands, <ListFolders />]);
        setInputText("");
        break;
      case "help":
        addCommand([...commands, <HelpCard />]);
        setInputText("");
        break;
      default:
        break;
    }

    const commandsDiv = document.getElementById("commands");
    commandsDiv.scrollTop = commandsDiv.scrollHeight
  };
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div className="input">
      <span>$</span>
      <form className="input--form">
        <input
          placeholder="Digite help para saber todos os comandos"
          value={inputText}
          onChange={handleChange}
          className="input--command"
        />
        <button type="submit" className="input--submit" onClick={handleSubmit}>
          <IoSend />
        </button>
      </form>
    </div>
  );
}
