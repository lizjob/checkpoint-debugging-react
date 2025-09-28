# 🐞 React Debugging Checkpoint

## 📋 Overview

This project is a sample React application designed to help you practice and demonstrate debugging skills using the **React Developer Tools** extension. It consists of simple components that utilize state and props. The main objective of this checkpoint is to identify and resolve issues related to incorrect state management, missing props, and unexpected component behavior.

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- React Developer Tools (Chrome Extension or Standalone)

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-debug-sample.git
   cd react-debug-sample
Install dependencies:

bash
Copy
Edit
npm install
Start the application:

bash
Copy
Edit
npm start
🔍 What Was Debugged
Missing Props: A component was expecting message but received msg. This was fixed by passing the correct prop name.

State Update Issues: State updates were not reflecting in child components due to incorrect prop passing.

Component Tree Inspection: Verified data flow and hierarchy using React Developer Tools.

🧠 Key Learnings
Efficient use of React Dev Tools to inspect component trees, states, and props.

Real-time debugging and verification of fixes without refreshing the browser.

Improved understanding of prop drilling and component communication.

📸 Screenshot
Include a screenshot of your React Developer Tools panel showing the fixed component tree (optional)

✅ Outcome
All bugs were successfully identified and resolved. The application functions as expected with accurate state and prop flows.

📁 Folder Structure
css
Copy
Edit
src/
│
├── App.js
├── Parent.js
├── Child.js
└── index.js
📎 Resources
React Developer Tools

React Documentation

V School - Props and Query

🧑‍💻 Author
Elizabeth Wanjiku Njoroge

