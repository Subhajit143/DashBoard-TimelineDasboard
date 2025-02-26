import React, { useState } from "react";

import {Column} from "../Pages/Column"
import { BurnBarrel } from "./BurnBarrel";
import { NavLink } from "react-router-dom";

export const CustomKanban = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />

      
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState([]);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12 ">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="General_Information"
        column="information"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In_progress"
        column="progressing"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Paused"
        column="paused"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Ready to Launch"
        column="complete"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />


      <NavLink to="/timeline" >
       <button className="bg-amber-50 text-2xl text-neutral-600">
        Next to the timeline Dashboard
       </button>
      </NavLink>
    </div>
  );
};


 







// const DEFAULT_CARDS = [
//   // BACKLOG
//   { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
//   { title: "SOX compliance checklist", id: "2", column: "backlog" },
//   { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
//   { title: "Document Notifications service", id: "4", column: "backlog" },
//   // TODO
//   {
//     title: "Research DB options for new microservice",
//     id: "5",
//     column: "todo",
//   },
//   { title: "Postmortem for outage", id: "6", column: "todo" },
//   { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

//   // DOING
//   {
//     title: "Refactor context providers to use Zustand",
//     id: "8",
//     column: "doing",
//   },
//   { title: "Add logging to daily CRON", id: "9", column: "doing" },
//   // DONE
//   {
//     title: "Set up DD dashboards for Lambda listener",
//     id: "10",
//     column: "done",
//   },
//   {
//     title: "Set up DD dashboards for Lambda listener",
//     id: "12",
//     column: "complete",
//   },
//   {
//     title: "fil the instect listener",
//     id: "13",
//     column: "complete",
//   },
// ];
