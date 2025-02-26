import React, { useState, useEffect } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/Lena-Mashayekhy.jpg";
import img3 from "../assets/saad_detroit-cheerleader_teaser.jpg";

export const AddCard = ({ column, setCards }) => {
  const [adding, setAdding] = useState(false);
  const assignees = [
    { name: "Monalisa", avatar: img1 },
    { name: "Jane Doe", avatar: img2 },
    { name: "David Johnson", avatar: img3 },
  ];
  const statuses = [
    "Backlog",
    "information",
    "progressing",
    "paused",
    "Complete",
  ];

  const [formdata, setFormData] = useState({
    title: "",
    assignee: assignees[0],
    status: statuses[0],
    start: "",
    end: "",
  });

  // Pre-populate form data with existing data
  useEffect(() => {
    setFormData({
      title: "Sample Task",
      assignee: assignees[1], // Pre-select Jane Doe
      status: "progressing", // Pre-select "progressing" status
      start: "2025-03-01", // Pre-fill start date
      end: "2025-03-15", // Pre-fill end date
    });
  }, []); // Run only once when the component mounts

  // Add 10-15 pre-existing tasks to the cards state
  useEffect(() => {
    const initialCards = [
      {
        id: "1",
        title: "Task 1",
        assignee: assignees[0],
        status: "Backlog",
        start: "2025-01-01",
        end: "2025-01-05",
        column: "backlog",
      },
      {
        id: "2",
        title: "Task 2",
        assignee: assignees[1],
        status: "information",
        start: "2025-01-10",
        end: "2025-01-15",
        column: "information",
      },
      {
        id: "3",
        title: "Task 3",
        assignee: assignees[2],
        status: "progressing",
        start: "2025-02-01",
        end: "2025-02-10",
        column: "progressing",
      },
      {
        id: "4",
        title: "Task 4",
        assignee: assignees[0],
        status: "paused",
        start: "2025-02-15",
        end: "2025-02-20",
        column: "paused",
      },
      {
        id: "5",
        title: "Task 5",
        assignee: assignees[1],
        status: "Complete",
        start: "2025-03-01",
        end: "2025-03-05",
        column: "complete",
      },
      {
        id: "6",
        title: "Task 6",
        assignee: assignees[2],
        status: "Backlog",
        start: "2025-03-10",
        end: "2025-03-15",
        column: "backlog",
      },
      {
        id: "7",
        title: "Task 7",
        assignee: assignees[0],
        status: "information",
        start: "2025-03-20",
        end: "2025-03-25",
        column: "information",
      },
      {
        id: "8",
        title: "Task 8",
        assignee: assignees[1],
        status: "information",
        start: "2025-04-01",
        end: "2025-04-10",
        column: "information",
      },
      {
        id: "9",
        title: "Task 9",
        assignee: assignees[2],
        status: "Complete",
        start: "2025-04-15",
        end: "2025-04-20",
        column: "complete",
      },
      {
        id: "10",
        title: "Task 10",
        assignee: assignees[0],
        status: "Complete",
        start: "2025-05-01",
        end: "2025-05-05",
        column: "complete",
      },
    ];

    setCards(initialCards); // Set the initial cards
  }, []); // Run only once when the component mounts

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: formdata.title,
        assignee: formdata.assignee,
        status: formdata.status,
        start: formdata.start,
        end: formdata.end,
        column: formdata.status.toLowerCase(),
      },
    ]);
    setAdding(false);
    setFormData({
      title: "",
      assignee: assignees[0],
      status: statuses[0],
      start: "",
      end: "",
    });
  };

  return (
    <>
      {adding ? (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <motion.form
            layout
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg space-y-3 text-black w-96"
          >
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                id="title"
                type="text"
                value={formdata.title}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Enter title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Assignee</label>
              <div className="flex gap-3">
                {assignees.map((assignee, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, assignee }))
                    }
                    className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition ${
                      formdata.assignee.name === assignee.name
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={assignee.avatar}
                      alt={assignee.name}
                      className="w-full h-full object-cover"
                    />
                    {formdata.assignee.name === assignee.name && (
                      <div className="absolute inset-0 flex items-center justify-center bg-neutral-800/70 bg-opacity-10 text-white text-xs font-semibold">
                        ✓
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Status</label>
              <select
                id="status"
                value={formdata.status}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input
                id="start"
                type="date"
                value={formdata.start}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">End Date</label>
              <input
                id="end"
                type="date"
                value={formdata.end}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mt-1.5 flex items-center justify-end gap-1.5">
              <button
                type="button"
                onClick={() => setAdding(false)}
                className="px-3 py-1.5 text-neutral-400 transition-colors hover:text-neutral-700 duration-300"
              >
                Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-neutral-950 transition-colors hover:bg-neutral-300"
              >
                <span>Add</span>
                <FiPlus />
              </button>
            </div>
          </motion.form>
        </div>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-2 text-neutral-500 font-semibold bg-[#EBECF0] rounded-md hover:bg-gray-300"
        >
          <FiPlus /> Add Task
        </motion.button>
      )}
    </>
  );
};