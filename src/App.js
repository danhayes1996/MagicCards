import React from 'react';
import './App.css';

import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <Card title="Lead by Example" 
            manaCostSrc= {["https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=G&type=symbol", "https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=1&type=symbol"]}
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkHplbTi1FC0OWoKKcdsl-JPz52rOgnlMQn5bpFEvBobDu5bW" 
            typeLine="Instant" 
            expansion="https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=OGW&size=small&rarity=C" 
            abilities="Support 2. (Put a +1/+1 counter on each of up to two target creatures." 
            flavourText="Gideon and Nissa carved a path through the Eldrazi swarm, and their Zendikari allies charged into the fray behind them"/>
    </div>
  );
}

export default App;
