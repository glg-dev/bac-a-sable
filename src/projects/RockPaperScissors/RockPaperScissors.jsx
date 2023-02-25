import React, { useEffect, useState } from 'react';
import { documentTitle } from '../..';
import BackHomeArrow from '../../components/BackHomeArrow';
import { extendedRules, rules } from './rules';

const RockPaperScissors = () => {
  
  document.title = `${documentTitle} - Rock Paper Scissors`

  const [regularMode, setRegularMode] = useState(true)
  const [rulesList, setRulesList] = useState([])
  const [userChoice, setUserChoice] = useState(null)
  const [cpuChoice, setCpuChoice] = useState(null)
  const [status, setStatus] = useState("")
  const [userScore, setUserScore] = useState(parseInt(localStorage.getItem("userScore")) || 0)
  const [cpuScore, setCpuScore] = useState(parseInt(localStorage.getItem("cpuScore")) || 0)  

  const items = regularMode ? ["rock", "paper", "scissors"] : ["rock", "paper", "scissors", "lizard", "Spock"]

  useEffect(() => {
    if (regularMode) {
      setRulesList(rules)
    } else {
      setRulesList(extendedRules)
    }
  }, [regularMode])
  
  useEffect(() => {
    if (userChoice) {
      setCpuChoice(items[Math.floor(Math.random() * items.length)])
    }
  }, [userChoice])

  useEffect(() => {
    if (cpuChoice) {
      determinateWinner(userChoice, cpuChoice)
    }
  }, [cpuChoice])

  useEffect(() => {
    if (status.includes("win")) {
      setUserScore(userScore + 1)
    } else if (status.includes("lose")) {
      setCpuScore(cpuScore + 1)
    }
  }, [status])

  useEffect(() => {
    localStorage.setItem("userScore", userScore)
  }, [userScore])

  useEffect(() => {
    localStorage.setItem("cpuScore", cpuScore)
  }, [cpuScore])

  const handleClick = (item) => {
    if (status) {
      return
    }
    setUserChoice(item)
  }

  const handleRestart = () => {
    setUserChoice(null)
    setCpuChoice(null)
    setStatus("")
  }

  const resetScore = () => {
    localStorage.setItem("userScore", 0)
    setUserScore(0)
    localStorage.setItem("cpuScore", 0)
    setCpuScore(0)
  }

  function determinateWinner(a, b) {
    if (a === b) {
      setStatus("Nobody scores")
    } else if (a === "rock") {
      if (b === "paper") {
        setStatus("Paper covers rock, you lose !")
      } else if (b === "scissors") {
        setStatus("Rock crushes scissors, you win !")
      } else if (b === "lizard") {
        setStatus("Rock crushes lizard, you win !")
      } else {
        setStatus("Spock vaporizes rock, you lose !")
      }
    } else if (a === "paper") {
      if (b === "rock") {
        setStatus("Paper covers rock, you win !")
      } else if (b === "scissors") {
        setStatus("Scissors cuts paper, you lose !")
      } else if (b === "lizard") {
        setStatus("Lizard eats paper, you lose !")
      } else {
        setStatus("Paper disproves Spock, you win !")
      }
    } else if (a === "scissors") {
      if (b === "rock") {
        setStatus("Rock crushes scissors, you lose !")
      } else if (b === "paper") {
        setStatus("Scissors cuts paper, you win !")
      } else if (b === "lizard") {
        setStatus("Scissors decapitates lizard, you win !")
      } else {
        setStatus("Spock smashes scissors, you lose !")
      }
    } else if (a === "lizard") {
      if (b === "rock") {
        setStatus("Rock crushes lizard, you lose !")
      } else if (b === "paper") {
        setStatus("Lizard eats paper, you win !")
      } else if (b === "scissors") {
        setStatus("Scissors decapitates lizard, you lose !")
      } else {
        setStatus("Lizard poisons Spock, you win !")
      }
    } else {
      if (b === "rock") {
        setStatus("Spock vaporizes rock, you win !")
      } else if (b === "paper") {
        setStatus("Paper disproves Spock, you lose !")
      } else if (b === "scissors") {
        setStatus("Spock smashes scissors, you win !")
      } else {
        setStatus("Lizard poisons Spock, you lose !")
      }
    }
  }

  
  return (
    <>
      <BackHomeArrow />
      <div className='rock-paper-scissors game'>
        <header>
          <h1 className='score'>You <span>{userScore}</span> - <span>{cpuScore}</span> CPU</h1>
          <button type="reset" onClick={resetScore}>Restart</button>
        </header>
        <div className="rps-board">
          <main className="wrapper">
            <button className={`choice ${items[0]}`} onClick={() => handleClick(items[0])}>
              <i className='fas fa-hand-back-fist'></i>
            </button>
            <button className={`choice ${items[1]}`} onClick={() => handleClick(items[1])}>
              <i className="fas fa-hand"></i>
            </button>
            <button className={`choice ${items[2]}`} onClick={() => handleClick(items[2])}>
              <i className="fas fa-hand-scissors"></i>
            </button>
            {
              !regularMode && (
                <>
                  <button className={`choice ${items[3]}`} onClick={() => handleClick(items[3])}>
                    <i className="fas fa-hand-lizard"></i>
                  </button>
                  <button className={`choice ${items[4]}`} onClick={() => handleClick(items[4])}>
                    <i className="fas fa-hand-spock"></i>
                  </button>
                </>
              )
            }
          </main>
          <aside className="rules">
            <h2>Rules</h2>
            <ul>
              {
              rulesList.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))
            }
            </ul>
            
          </aside>
        </div>
        <button className="game-mode" onClick={() => setRegularMode(!regularMode)}>{regularMode ? "Want to try the Lizard/Spock version ?": "Back to regular version ?" }</button>
        {
          userChoice && cpuChoice ? (
            <div className='comment'>
              <p className="choices">You chose {userChoice}, the cpu chose {cpuChoice}</p>
              {status && <p>{status}</p>}
              <button type="reset" onClick={handleRestart}>Play again</button>
            </div>
        
          ) : null}
      </div>
    </>
  );
};

export default RockPaperScissors;