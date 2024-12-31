export const tableMockData = {
  CompanyManagement: {
    tableName: "Companies",
    columns: ["Name", "Location", "Communication Period"],
    rows: [
      { name: "ENTNT", location: "Abu Dhabi", period: "7" },
      { name: "APPLE", location: "California, US", period: "9" },
    ],
  },
  CommunicationMethods: {
    tableName: "Communication Methods",
    columns: ["Name", "Description", "Sequence", "Mandatory"],
    rows: [
      {
        name: "LinkedIn Post",
        description: "Share or interact with company posts on LinkedIn",
        sequence: "1",
        mandatory: "Yes",
      },
      {
        name: "LinkedIn Message",
        description: "Launch the grand iPhone 16",
        sequence: "2",
        mandatory: "Yes",
      },
      {
        name: "Email",
        description: "Cancelled freshers hiring",
        sequence: "3",
        mandatory: "Yes",
      },
    ],
  },
};



export const dashboardData = [
    {
      company: "ENTNT",
      location: "Abu Dhabi",
      lastCommunications: [
        { type: "LinkedIn Post", date: "12/20/2024", notes: "Campaign update" },
        { type: "Email", date: "12/15/2024", notes: "Follow-up email" },
      ],
      nextDue: "12/30/2024",
      highlight: "red", // Overdue
    },
    {
      company: "TechNova",
      location: "San Francisco",
      lastCommunications: [
        { type: "Meeting", date: "12/10/2024", notes: "Project discussion" },
        { type: "Call", date: "12/05/2024", notes: "Initial consultation" },
      ],
      nextDue: "12/22/2024",
      highlight: "yellow", // Due today
    },
    // {
    //   company: "InnoCorp",
    //   location: "London",
    //   lastCommunications: [
    //     { type: "Email", date: "12/12/2024", notes: "Quarterly update" },
    //     { type: "LinkedIn Post", date: "12/08/2024", notes: "Job posting" },
    //   ],
    //   nextDue: "01/05/2025",
    //   highlight: null, // No highlight
    // },
    // {
    //   company: "HealthPlus",
    //   location: "Dubai",
    //   lastCommunications: [
    //     { type: "Call", date: "12/18/2024", notes: "Partnership discussion" },
    //     { type: "Meeting", date: "12/15/2024", notes: "Follow-up" },
    //   ],
    //   nextDue: "12/18/2024",
    //   highlight: "red", // Overdue
    // },
    {
      company: "EduTech",
      location: "New York",
      lastCommunications: [
        {
          type: "Email",
          date: "12/20/2024",
          notes: "Course material discussion",
        },
        {
          type: "LinkedIn Post",
          date: "12/19/2024",
          notes: "Event announcement",
        },
      ],
      nextDue: "12/21/2024",
      highlight: "yellow", // Due today
    },
    {
      company: "GreenEnergy",
      location: "Berlin",
      lastCommunications: [
        {
          type: "LinkedIn Post",
          date: "12/14/2024",
          notes: "Sustainability update",
        },
        { type: "Email", date: "12/10/2024", notes: "Project proposal" },
      ],
      nextDue: "01/02/2025",
      highlight: null, // No highlight
    },
    {
      company: "SmartSolutions",
      location: "Tokyo",
      lastCommunications: [
        { type: "Call", date: "12/07/2024", notes: "Technical discussion" },
        { type: "Meeting", date: "12/06/2024", notes: "Contract review" },
      ],
      nextDue: "12/15/2024",
      highlight: "red", // Overdue
    },
    {
      company: "LogiChain",
      location: "Singapore",
      lastCommunications: [
        { type: "Meeting", date: "12/22/2024", notes: "Logistics planning" },
        { type: "Call", date: "12/20/2024", notes: "Supply chain update" },
        { type: "Meeting", date: "12/22/2024", notes: "Logistics planning" },
        { type: "Call", date: "12/20/2024", notes: "Supply chain update" },
      ],
      nextDue: "12/22/2024",
      highlight: "yellow", // Due today
    },
  ]



  export const overdueCommunications = [
    {
      id: 1,
      company: "ENTNT",
      lastCommunication: "12/20/2024",
      overdueDays: 10,
    },
    {
      id: 2,
      company: "GOOGLE",
      lastCommunication: "12/15/2024",
      overdueDays: 15,
    },
    {
      id: 3,
      company: "GOOGLE",
      lastCommunication: "12/15/2024",
      overdueDays: 15,
    },
    {
      id: 4,
      company: "GOOGLE",
      lastCommunication: "12/15/2024",
      overdueDays: 15,
    },
  ];
