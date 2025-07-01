import React from 'react';
import '../App.css';

function QuoteDisplay({ quote, votes, onVote, onNext }) {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote}"</p>
      <p className="vote-count">Votes: {votes}</p>
      <button onClick={onVote}>Vote</button>
      <button onClick={onNext}>Next Quote</button>
    </div>
  );
}

export default QuoteDisplay;
