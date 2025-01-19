# Assignment Submission Tracker

This is a simple web application that helps teachers or administrators to track students who have not submitted their assignments. The app allows users to upload two text files:
1. A list of all students.
2. A list of students who have submitted their assignments.

The app compares both lists and returns the names of students who have not submitted their assignments.

## Features
- Upload a list of all students (one student per line).
- Upload a list of students who have submitted the assignment (one student per line).
- Automatically finds and lists students who have not submitted the assignment.
- Simple and clean user interface.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python (Flask)
- **Hosting**:
  - Frontend: GitHub Pages
  - Backend: Heroku (or any other cloud platform)

## Installation

### Prerequisites
- Python 3.x
- Flask
- Flask-Cors

### Steps to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git

/https://github.com/CodeBy-Raj/assignmentTracker.git
│
├── /static
│   ├── style.css        # CSS styles for frontend
│   └── app.js           # JavaScript for frontend
│
├── /templates
│   └── index.html       # HTML file for the user interface
│
├── app.py               # Flask backend
├── requirements.txt     # Python dependencies
└── Procfile             # Heroku deployment configuration
