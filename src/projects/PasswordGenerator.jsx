import React, { useState } from 'react';
import BackHomeArrow from '../components/BackHomeArrow';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('Générateur de mdp')
  const [passwordLength, setPasswordLength] = useState(8)
  const [isLowerCaseChecked, setIsLowerCaseChecked] = useState(true)
  const [isUpperCaseChecked, setIsUpperCaseChecked] = useState(false)
  const [isNumbersChecked, setIsNumbersChecked] = useState(false)
  const [isSymbolsChecked, setIsSymbolsChecked] = useState(false)

  document.title = "Password Generator"

  const dataLowercase = "abcdefghijklmnopqrstuvwxyz".split("")
  const dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const dataNumbers = "0123456789".split("")
  const dataSymbols = `!§:/;.,?/*-+&~"#'{}()[]-|_^@=><%$£¤\``.split("")

  const handleInput = (e) => {
    setPasswordLength(e.target.value)
  }

  const handleCopy = () => {
    if (password === 'Générateur de mdp') {
      return
    } else {
      navigator.clipboard.writeText(password)
      alert(`Le mot de passe "${password}" a été copié !`)
    }
  }

  function generatePassword() {
    const data = [].concat(
      isLowerCaseChecked ? dataLowercase : [],
      isUpperCaseChecked ? dataUppercase : [],
      isNumbersChecked ? dataNumbers : [],
      isSymbolsChecked ? dataSymbols : [],
    )

    if (!data.length) {
      alert("Veuillez sélectionner des critères")
      return
    }

    let newPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      newPassword += data[Math.floor(Math.random() * data.length)]
    }
    setPassword(newPassword)
  }

  
  return (
    <>
      <BackHomeArrow />
      <div className="password-generator-wrapper">
        <div className='password-generator'>
          <h3 className='output'>{password}</h3>
          <section className="range">
            <input 
              type="range" 
              min="4" 
              max="24" 
              step="1" 
              value={passwordLength} 
              onChange={(e) => handleInput(e)}
            />
            <input 
              type="text" 
              value={passwordLength}
              maxLength="2"
              id='display-password-length'
              onChange={(e) => handleInput(e)}
            />
            <button className="copy-to-clipboard" onClick={handleCopy}>
              <i className='fas fa-copy'></i>
            </button>
          </section>
          <section className="items">
            <input 
              type="checkbox" 
              id="lowercase" 
              checked={isLowerCaseChecked} 
              onChange={() => setIsLowerCaseChecked(!isLowerCaseChecked)} 
            />
            <label htmlFor="lowercase">a-z</label>
            
            <input 
              type="checkbox" 
              id="uppercase" 
              checked={isUpperCaseChecked} 
              onChange={() => setIsUpperCaseChecked(!isUpperCaseChecked)} 
            />
            <label htmlFor="uppercase">A-Z</label>
            
            <input 
              type="checkbox" 
              id="numbers" 
              checked={isNumbersChecked} 
              onChange={() => setIsNumbersChecked(!isNumbersChecked)} 
            />
            <label htmlFor="numbers">0-9</label>
            
            <input 
              type="checkbox" 
              id="symbols" 
              checked={isSymbolsChecked} 
              onChange={() => setIsSymbolsChecked(!isSymbolsChecked)} 
            />
            <label htmlFor="symbols">!-?</label>
          </section>
          <button className='generate' onClick={generatePassword}>Générer un mot de passe</button>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;