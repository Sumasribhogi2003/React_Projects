import React from 'react';
import '../App.css';

function TopQuote({ quote, votes }) {
  return (
    <div className="top-quote">
      <h2>Top Voted Quote</h2>
      <p>"{quote}"</p>
      <p>Votes: {votes}</p>
    </div>
  );
}

export default TopQuote;
