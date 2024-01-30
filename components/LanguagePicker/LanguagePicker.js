import Image from "next/image";
import { useState } from "react";

const LanguagePicker = ({ handleLocaleChange, selectedLang }) => {
  const [showChoices, setShowChoices] = useState(false);

  const toggleChoices = () => {
    setShowChoices(prev => !prev);
  };

  const hideChoices = () => {
    setShowChoices(false);
  };

  const handleLocaleButtonClick = (lang) => {
    handleLocaleChange(lang);
    hideChoices();
  };

  return (
    <div
      className="absolute mt-2 -right-0 md:-right-4"
    >
      <button
        className="langPickerBtn mb-3"
        onClick={toggleChoices}
      >
        <Image
          src={selectedLang === "en" ? "/images/uk.svg" : "/images/tr.svg"}
          alt={selectedLang === "en" ? "English" : "Turkish"}
          width={22.5}
          height={17.5}
        />
      </button>
      {showChoices && (
        <div className="flex flex-col">
          {selectedLang === 'tr' && (
            <button
              className="langPickerBtn"
              onClick={() => handleLocaleButtonClick("en")}
            >
              <Image src="/images/uk.svg" alt="English" width={22.5} height={17.5} />
            </button>
          )}
          {selectedLang === 'en' && (
            <button
              className="langPickerBtn"
              onClick={() => handleLocaleButtonClick("tr")}
            >
              <Image src="/images/tr.svg" alt="Turkish" width={22.5} height={17.5} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
