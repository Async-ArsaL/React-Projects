import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator Function
  const passGen = useCallback(() => {
    let newPass = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) characters += "0123456789";
    if (charAllowed) characters += "!@#$%^&*()_+=-{}[]|;':\",.<>/?";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * characters.length);
      newPass += characters.charAt(charIndex);
    }
    setPassword(newPass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passGen();
  }, [length, numAllowed, charAllowed]);

  // Copy Password to Clipboard
  const passRef = useRef(null);
  const copyPass = useCallback(() => {
    if (passRef.current) {
      passRef.current.focus();
      passRef.current.select();
      navigator.clipboard.writeText(password);
    }
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-5">
          🔐 Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center border rounded-lg overflow-hidden bg-gray-100">
          <input
            type="text"
            value={password}
            readOnly
            ref={passRef}
            className="w-full p-3 text-lg bg-transparent outline-none text-gray-700"
          />
          <button
            onClick={copyPass}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all"
          >
            📋 Copy
          </button>
        </div>

        {/* Controls Section */}
        <section className="mt-5">
          {/* Length Control */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Length: {length}</label>
            <input
              type="range"
              min="8"
              max="30"
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-5 h-5 cursor-pointer"
              />
              <span className="text-gray-700">Include Symbols</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
                className="w-5 h-5 cursor-pointer"
              />
              <span className="text-gray-700">Include Numbers</span>
            </label>
          </div>
        </section>

        {/* Generate Password Button */}
        <button
          onClick={passGen}
          className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-2 rounded-lg transition-all"
        >
          🔄 Generate Password
        </button>
      </div>
    </div>
  );
};

export default App;
