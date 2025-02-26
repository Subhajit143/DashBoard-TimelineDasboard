import React, { useState } from "react";
import { motion } from "framer-motion";

import { DropIndicator } from "./DropIndicator";


export const Card = ({ title, id, status, column, assignee, start, end, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border  bg-[#FFFFFF] p-3 active:cursor-grabbing "
      >
        <p className="text-sm text-neutral-500 pb-3">{title}</p>
        <p className="text-xs text-neutral-400">Status : {status}</p>
        <div className="flex justify-between">
         <div>
         <p className="text-xs text-neutral-400">  {start}</p>
         <p className="text-xs text-neutral-400">  {end}</p>
         </div>

         <div>
         <img src={assignee.avatar} alt="" className="w-7 h-7 rounded-full object-cover" />
         </div>
        </div>
        
      </motion.div>
    </>
  );
};