import "./App.css";
import { FixedComponent } from "./components/FixedComponent";
import { ScrollingContent } from "./components/ScrollingContent";
import { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState("EN");

  // Use useEffect to set initial language based on user preference (if stored)
  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      "preferredLanguageProfileChicao",
    );
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      localStorage.setItem("preferredLanguageProfileChicao", "EN");
    }
  }, []);

  // Update language preference
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    // Persist the user's language preference
    localStorage.setItem("preferredLanguageProfileChicao", newLanguage);
  };

  const languageOptions = ["EN", "PT"];

  return (
    <>
      <div className="language z-30 w-full bg-[#456351] px-10 pb-5 pt-10 md:fixed md:px-40 md:text-right">
        {languageOptions.map((lang) => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className=" h-10 rounded border border-solid border-white bg-[#9fb6a6]/40 px-6 hover:bg-white hover:text-[#2a3b31]"
          >
            {lang}
          </button>
        ))}
      </div>
      <div className=" container mx-auto px-10 pb-32 lg:grid lg:grid-cols-2">
        <FixedComponent language={language} />
        <ScrollingContent language={language} />
      </div>
    </>
  );
}

export default App;