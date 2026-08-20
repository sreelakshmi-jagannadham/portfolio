
const votingMachine = {
  title: "Smart Electronic Voting Machine",

  subtitle:
    "A secure Arduino-based electronic voting system featuring password-protected administration, EEPROM vote storage, graphical TFT interface, live vote counting, and automatic winner detection.",
  github: "https://github.com/sreelakshmi-jagannadham/Smart-Voting-System-Arduino",
report: "#",
demo: "https://wokwi.com/projects/467510514104067073",
  duration: "Jan 2026 – Apr 2026",

  team: "Individual Project",

  category: "Embedded Systems",

  status: "Completed",

  overview: {
    platform: "Arduino Uno",
    language: "Embedded C",
    display: "ILI9341 TFT",
    storage: "EEPROM",
    simulation: "Wokwi",
    ide: "Arduino IDE",
    microcontroller: "ATmega328P",
    status: "Completed",
  },

  technologies: [
    "Arduino",
    "Embedded C",
    "ILI9341 TFT",
    "EEPROM",
    "Wokwi",
  ],

  features: [
    {
      title: "Password Protection",
      description:
        "Admin password required to access results and reset votes.",
      icon: "🔒",
    },
    {
      title: "One Vote Per User",
      description:
        "Prevents duplicate voting and ensures fair elections.",
      icon: "🗳️",
    },
    {
      title: "EEPROM Storage",
      description:
        "Vote counts remain saved even after power loss.",
      icon: "💾",
    },
    {
      title: "Graphical Results",
      description:
        "Displays live vote counts and percentages on the TFT display.",
      icon: "📊",
    },
    {
      title: "Winner Detection",
      description:
        "Automatically determines the winning candidate.",
      icon: "🏆",
    },
    {
      title: "Buzzer Feedback",
      description:
        "Provides audio confirmation for important events.",
      icon: "🔔",
    },
  ],

  hardware: [
  {
    name: "Arduino Uno",
    purpose: "Main microcontroller that controls the voting system.",
    icon: "🟦",
  },
  {
    name: "ILI9341 TFT Display",
    purpose: "Displays menus, voting interface and results.",
    icon: "🖥️",
  },
  {
    name: "Push Buttons",
    purpose: "Used for candidate selection and admin controls.",
    icon: "🔘",
  },
  {
    name: "EEPROM",
    purpose: "Stores vote counts permanently.",
    icon: "💾",
  },
  {
    name: "Buzzer",
    purpose: "Provides audio feedback after important actions.",
    icon: "🔔",
  },
  {
    name: "Breadboard & Jumper Wires",
    purpose: "Used for hardware connections and prototyping.",
    icon: "🔌",
  },
],
  workingFlow: [
  {
    step: "1",
    title: "System Initialization",
    description:
      "Arduino initializes the TFT display, EEPROM, buzzer, and all input buttons.",
  },
  {
    step: "2",
    title: "Voting Begins",
    description:
      "The system displays the candidate list and waits for voter input.",
  },
  {
    step: "3",
    title: "Vote Recording",
    description:
      "The selected candidate's vote is recorded and saved to EEPROM.",
  },
  {
    step: "4",
    title: "Vote Confirmation",
    description:
      "The TFT display confirms successful voting and the buzzer provides feedback.",
  },
  {
    step: "5",
    title: "Admin Authentication",
    description:
      "Administrator enters a secure password to access the results.",
  },
  {
    step: "6",
    title: "Result Display",
    description:
      "Vote counts, percentages, and the winner are displayed graphically.",
  },
],

  gallery: [
    {
      title: "Home Screen",
      description: "Main menu displayed after system startup.",
      image: "/images/voting/home-screen.png",
    },
    {
      title: "Circuit Diagram",
      description: "Complete hardware wiring of the voting machine.",
      image: "/images/voting/circuit-diagram.png",
    },
    {
      title: "Vote Recorded",
      description: "Confirmation displayed after a successful vote.",
      image: "/images/voting/vote-recorded.png",
    },
    {
      title: "Access Granted",
      description: "Administrator login successful.",
      image: "/images/voting/access-granted.png",
    },
    {
      title: "Password Screen",
      description: "Password entry page for administrative access.",
      image: "/images/voting/password-screen.png",
    },
    {
      title: "Results Dashboard",
      description: "Displays vote counts and winner information.",
      image: "/images/voting/results-dashboard.png",
    },
    {
      title: "Winner Screen",
      description: "Displays the election winner.",
      image: "/images/voting/winner-screen.png",
    },
    {
      title: "Voting Closed",
      description: "Voting has been locked by the administrator.",
      image: "/images/voting/voting-closed.png",
    },
    {
      title: "Voting Resumed",
      description: "Voting has been resumed.",
      image: "/images/voting/voting-resumed.png",
    },
  ],
  challenges: [
  {
    title: "Preventing Duplicate Voting",
    solution:
      "Implemented vote locking logic to ensure each voter can cast only one vote during a voting session."
  },
  {
    title: "Persistent Vote Storage",
    solution:
      "Used Arduino EEPROM to safely store vote counts, ensuring data remains available even after power loss."
  },
  {
    title: "User-Friendly Interface",
    solution:
      "Designed an intuitive TFT display interface with clear menus, confirmations, and graphical result visualization."
  },
  {
    title: "Secure Administration",
    solution:
      "Added password-protected access before allowing result viewing or vote reset operations."
  }
],
  futureScope: [
  {
    title: "Biometric Authentication",
    description:
      "Integrate fingerprint authentication to prevent unauthorized voting."
  },
  {
    title: "RFID-Based Voter Verification",
    description:
      "Use RFID cards to uniquely identify registered voters."
  },
  {
    title: "Cloud Database",
    description:
      "Synchronize vote data securely with a cloud database for centralized management."
  },
  {
    title: "ESP32 IoT Integration",
    description:
      "Transmit election data securely over Wi-Fi for remote monitoring."
  },
  {
    title: "Encrypted Vote Storage",
    description:
      "Store votes using encryption to improve security and privacy."
  },
  {
    title: "Mobile Monitoring Dashboard",
    description:
      "Allow election officers to monitor voting statistics in real time."
  }
],
skillsUsed: [
  "Embedded C",
  "Arduino Programming",
  "Circuit Design",
  "EEPROM Memory",
  "TFT Display Programming",
  "Embedded Systems",
  "Debugging",
  "Problem Solving",
  "System Integration",
  "User Interface Design"
]
};
   

export default votingMachine;