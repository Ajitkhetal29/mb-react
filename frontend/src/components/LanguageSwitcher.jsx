import React, { useEffect, useState } from "react";
import i18n from "i18next"; 

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState(i18n.language);

  const handleChange = (e) => {
    const selected = e.target.value;
    setLanguage(selected);
    i18n.changeLanguage(selected); 
  };


 


  return (
   <div className="relative inline-block">
  <select
    className="
      appearance-none
      bg-transparent
      border border-white/40
      text-white
      rounded-md
      px-3 py-2 pr-8
      focus:outline-none
      focus:ring-2 focus:ring-white/60
      cursor-pointer
    "
    value={language}
    onChange={handleChange}
  >
    <option className="bg-black/80 text-white" value="en">English</option>
    <option className="bg-black/80 text-white" value="hi">हिन्दी</option>
    <option className="bg-black/80 text-white" value="mr">मराठी</option>
    <option className="bg-black/80 text-white" value="gu">ગુજરાતી</option>
  </select>
  <svg
    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white"
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
</div>

  );
}
