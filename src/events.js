const now = new Date();

export default [
  {
    id: 0,
    title: "Event",
    allDay: true,
    start: new Date(2020, 5, 0),
    end: new Date(2020, 5, 1),
  },
  {
    id: 1,
    title: "Competitions",
    start: new Date(2020, 5, 7),
    end: new Date(2020, 5, 10),
  },

  {
    id: 2,
    title: "Exhibitions",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: "Expositions",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: "Fairs, festivals",
    start: new Date(2020, 5, 9, 0, 0, 0),
    end: new Date(2020, 5, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2020, 5, 11),
    end: new Date(2020, 5, 13),
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2020, 5, 12, 10, 30, 0, 0),
    end: new Date(2020, 5, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2020, 5, 12, 12, 0, 0, 0),
    end: new Date(2020, 5, 12, 13, 0, 0, 0),
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2020, 5, 12, 14, 0, 0, 0),
    end: new Date(2020, 5, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: "Meetings",
    start: new Date(2020, 5, 12, 17, 0, 0, 0),
    end: new Date(2020, 5, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2020, 5, 12, 20, 0, 0, 0),
    end: new Date(2020, 5, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2020, 5, 13, 7, 0, 0),
    end: new Date(2020, 5, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2020, 5, 17, 19, 30, 0),
    end: new Date(2020, 5, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2020, 5, 17, 19, 30, 0),
    end: new Date(2020, 5, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2020, 5, 20, 19, 30, 0),
    end: new Date(2020, 5, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: "Parades",
    start: now,
    end: now,
  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(2020, 5, 14, 15, 30, 0),
    end: new Date(2020, 5, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: "Scientific expeditions",
    start: new Date(2020, 5, 14, 16, 30, 0),
    end: new Date(2020, 5, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: "Late Night Event",
    start: new Date(2020, 5, 14, 16, 30, 0),
    end: new Date(2020, 5, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: new Date(2020, 5, 14, 17, 30, 0),
    end: new Date(2020, 5, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: new Date(2020, 5, 14, 17, 0, 0),
    end: new Date(2020, 5, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: "Phone Interview",
    start: new Date(2020, 5, 14, 17, 0, 0),
    end: new Date(2020, 5, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: "Cooking Class",
    start: new Date(2020, 5, 14, 17, 30, 0),
    end: new Date(2020, 5, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: "Go to the gym",
    start: new Date(2020, 5, 14, 18, 30, 0),
    end: new Date(2020, 5, 14, 20, 0, 0),
  },
];
