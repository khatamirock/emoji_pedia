import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

function EntryFunc(xx) {
  return <Entry emo={xx.emoji} name={xx.name} para={xx.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(EntryFunc)}</dl>
    </div>
  );
}

export default App;
