import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot }) {
  const armyItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
            clickEvent={removeBot}
            hideBot={removeBot}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {armyItem}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
