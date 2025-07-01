import React, { useState } from 'react';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay';
import TopQuote from './components/TopQuote';
import quotes from './components/quotes'; 

function App() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [votes, setVotes] = useState(Array(quotes.length).fill(0));

  const handleNextQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(randomIndex);
  };

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[currentQuoteIndex]++;
    setVotes(updatedVotes);
  };

  const maxVoteIndex = votes.indexOf(Math.max(...votes));

  return (
    <div className="App">
      <h1>Quote Voting App</h1>
      <QuoteDisplay
        quote={quotes[currentQuoteIndex]}
        votes={votes[currentQuoteIndex]}
        onVote={handleVote}
        onNext={handleNextQuote}
      />
      <TopQuote quote={quotes[maxVoteIndex]} votes={votes[maxVoteIndex]} />
    </div>
  );
}

export default App;
