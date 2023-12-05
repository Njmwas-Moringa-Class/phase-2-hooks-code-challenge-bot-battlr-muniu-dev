import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, hideBot }) {
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        hideBot={hideBot}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row">
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;