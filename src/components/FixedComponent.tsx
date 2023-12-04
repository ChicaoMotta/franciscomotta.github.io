import React from "react";
import NavComponent from "./NavComponent/NavComponent";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import "./FixedComponent.css";

interface FixedComponentProps {
  language: string;
}

export const FixedComponent: React.FC<FixedComponentProps> = ({ language }) => {
  return (
    <div className=" top-0 flex flex-col justify-between lg:sticky lg:h-[70vh] lg:px-20 lg:pt-28">
      <div className="header-content pt-6">
        <h1 className="text-text-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Francisco Motta
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {language === "EN"
            ? "Full-Stack Engineer"
            : "Desenvolvedor Full-Stack"}
        </h2>
        <p className="mb-5 mt-4">
          {language === "EN"
            ? "     I engineer exceptional, seamlessly integrated full-stack applications that deploy and maintain with ease!"
            : "Eu crio aplicações full-stack excepcionais, perfeitamente integradas, que são implantadas e mantidas com facilidade!"}
        </p>

        <NavComponent></NavComponent>
      </div>
      <ul className=" socials flex items-start justify-start">
        <li>
          <a href="https://github.com/ChicaoMotta">
            <img src={github} alt="" className="mr-6 h-8 w-8" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/francisco-motta/">
            <img src={linkedin} alt="" className=" h-8 w-8" />
          </a>
        </li>
      </ul>

      <hr className="mt-8 md:hidden" />
    </div>
  );
};
