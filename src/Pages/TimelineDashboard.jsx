import React, { useState, useCallback } from "react";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import "@bitnoi.se/react-scheduler/dist/style.css"; // Import the library's styles

// Extend dayjs with the isBetween plugin
dayjs.extend(isBetween);

export const TimelineDashBoard = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);
  const [range, setRange] = useState({
    startDate: new Date("2023-04-01T00:00:00Z"), // Start of April 2023
    endDate: new Date("2023-12-31T23:59:59Z"),   // End of December 2023
  });

  const handleRangeChange = useCallback((range) => {
    setRange(range);
  }, []);

  // Filtering events that are included in the current date range
  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter((project) => {
      const projectStart = dayjs(project.startDate);
      const projectEnd = dayjs(project.endDate);
      const rangeStart = dayjs(range.startDate);
      const rangeEnd = dayjs(range.endDate);

      return (
        projectStart.isBetween(rangeStart, rangeEnd, null, "[]") || // Project starts within the range
        projectEnd.isBetween(rangeStart, rangeEnd, null, "[]") ||   // Project ends within the range
        (projectStart.isBefore(rangeStart) && projectEnd.isAfter(rangeEnd)) // Project spans the entire range
      );
    }),
  }));

  console.log("Filtered Data:", filteredMockedSchedulerData); // Debug filtered data

  return (
    <section>
      <Scheduler
        data={filteredMockedSchedulerData}
        isLoading={false}
        onRangeChange={handleRangeChange}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) => console.log(item)}
        onFilterData={() => setFilterButtonState(1)}
        onClearFilterData={() => setFilterButtonState(0)}
        config={{
          zoom: 0, // Zoom level (0 = days, 1 = weeks, etc.)
          filterButtonState, // Current filter state
        }}
      />
    </section>
  );
};

const mockedSchedulerData = [
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/24",
      title: "Joe Doe",
      subtitle: "Frontend Developer",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date("2025-02-20T15:31:24.272Z"),
        endDate: new Date("2025-03-10T10:28:22.649Z"),
        occupancy: 3600,
        title: "Project A",
        subtitle: "Subtitle A",
        description: "array indexing Salad West Account",
        bgColor: "rgb(254,165,177)",
      },
    ],
  },
  {
    id: "1a2b3c4d-5678-90ef-ghij-klmnopqrstuv",
    label: {
      icon: "https://picsum.photos/24",
      title: "Jane Smith",
      subtitle: "Backend Developer",
    },
    data: [
      {
        id: "9c8d7e6f-5432-10ab-cdef-ghijklmnopqr",
        startDate: new Date("2025-02-01T09:00:00Z"),
        endDate: new Date("2025-02-15T18:00:00Z"),
        occupancy: 2000,
        title: "Project B",
        subtitle: "Subtitle B",
        description: "Database optimization",
        bgColor: "rgb(144,238,144)",
      },
    ],
  },
  {
    id: "2b3c4d5e-6789-01fg-hijk-lmnopqrstuvw",
    label: {
      icon: "https://picsum.photos/24",
      title: "Alice Johnson",
      subtitle: "UI/UX Designer",
    },
    data: [
      {
        id: "3c4d5e6f-7890-12gh-ijkl-mnopqrstuvwx",
        startDate: new Date("2025-02-01T10:00:00Z"),
        endDate: new Date("2025-04-30T17:00:00Z"),
        occupancy: 1500,
        title: "Project C",
        subtitle: "Subtitle C",
        description: "User interface redesign",
        bgColor: "rgb(173,216,230)",
      },
    ],
  },
  {
    id: "3c4d5e6f-7890-12gh-ijkl-mnopqrstuvwx",
    label: {
      icon: "https://picsum.photos/24",
      title: "Bob Brown",
      subtitle: "DevOps Engineer",
    },
    data: [
      {
        id: "4d5e6f7g-8901-23hi-jklm-nopqrstuvwxy",
        startDate: new Date("2025-02-01T08:00:00Z"),
        endDate: new Date("2025-04-15T16:00:00Z"),
        occupancy: 2500,
        title: "Project D",
        subtitle: "Subtitle D",
        description: "CI/CD pipeline setup",
        bgColor: "rgb(255,182,193)",
      },
    ],
  },
  {
    id: "4d5e6f7g-8901-23hi-jklm-nopqrstuvwxy",
    label: {
      icon: "https://picsum.photos/24",
      title: "Charlie Davis",
      subtitle: "Full Stack Developer",
    },
    data: [
      {
        id: "5e6f7g8h-9012-34ij-klmn-opqrstuvwxyz",
        startDate: new Date("2025-02-01T07:00:00Z"),
        endDate: new Date("2025-02-30T15:00:00Z"),
        occupancy: 3000,
        title: "Project E",
        subtitle: "Subtitle E",
        description: "E-commerce platform development",
        bgColor: "rgb(221,160,221)",
      },
    ],
  },
];



