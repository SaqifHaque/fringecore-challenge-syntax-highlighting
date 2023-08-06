import { useState } from "react";

function App() {
  const allHints = ['tom', 'tomato', 'tom cruise', 'touma katsuragi', 'tomar naam ki?'];
  const maxCharacters = 64;

  const [inputValue, setInputValue] = useState('');
  const [subText, setSubText] = useState('');
  
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    // if(value.length > 27) {
    //   let len = value.length - 27;
    //   console.log(len, "len");
    //   setSubText(value.slice(len));
    // } else {
      setSubText(value);
    // }
  };
  
  const highlightTomato = (text) => {
    return text.replace(/tomato/g, '<span class="text-red-500">tomato</span>');
  };

  const filteredHints = allHints.filter(hint =>
    hint.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8">
        <div className="relative mb-4">
          <input
            className="border rounded px-3 py-2 mb-4 w-screen"
            type="text"
            maxLength={maxCharacters}
            value={inputValue}
            onChange={handleChange}
            placeholder="Type here"
          />
          <div
            className="absolute top-0 left-0 pointer-events-none whitespace-pre-line"
            style={{ marginLeft: '13px', marginTop: '9px'}}
            dangerouslySetInnerHTML={{ __html: highlightTomato(subText) }}
          />
          {(filteredHints.length > 0 && inputValue.length > 0 ) && (
            <div className="absolute top-full left-0 p-2 bg-gray-200 shadow rounded">
              <ul className="list-none">
                {filteredHints.map((hint, index) => (
                  <li key={index} className="mb-1">
                    {hint}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
