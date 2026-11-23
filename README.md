# Expense-Tracker
# Expense Tracker

A web-based Expense Tracker built using Python Flask, SQLite, HTML, CSS and JavaScript.

## 1. Technologies Used

- Python
- Flask
- SQLite
- HTML5
- CSS3
- JavaScript

## 2. Project Structure

```text
Expense-Tracker/
│
├── app.py
├── requirements.txt
├── README.md
│
├── templates/
│   ├── base.html
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
└── database.db
```

Note: `database.db` will be generated when we initialize the SQLite database.

## 3. Installation

Install Flask:

```bash
python3 -m pip install flask
```

Install dependencies from requirements.txt:

```bash
python3 -m pip install -r requirements.txt
```

## 4. Run the Project

Start the Flask server:

```bash
python3 app.py
```

Open port 5000 in the GitHub Codespaces Ports tab.

## 5. Important Terminal Commands

| Command | Purpose |
|---|---|
| `pwd` | Check current directory |
| `ls` | List files and folders |
| `mkdir foldername` | Create a folder |
| `touch filename` | Create a file |
| `cd foldername` | Enter a folder |
| `python3 app.py` | Run Flask |
| `Ctrl + C` | Stop Flask server |
| `jobs` | Check suspended jobs |

**Important:** Use `Ctrl + C` to stop Flask. `Ctrl + Z` suspends the process instead of stopping it.

## 6. Common Errors and Solutions

### Error: pip not recognized

Use:

```bash
python3 -m pip install flask
```

### Error: Port 5000 is already in use

Check suspended jobs:

```bash
jobs
```

If Flask is suspended as job 1:

```bash
kill %1
```

Alternatively, use another port in app.py:

```python
app.run(host="0.0.0.0", port=5001, debug=True)
```

### Error: requirements.txt not found

Check your current directory:

```bash
pwd
ls -la
```

Make sure you are inside the main Expense-Tracker folder.

## 7. Development Progress

- [x] Create GitHub repository
- [x] Set up GitHub Codespaces
- [x] Create project folders and files
- [x] Install Flask
- [x] Create initial Flask application
- [ ] Build dashboard design
- [ ] Connect SQLite database
- [ ] Add income functionality
- [ ] Add expense functionality
- [ ] Add edit and delete functionality
- [ ] Add charts and reports

## 8. Future Updates

This README will be updated as new features are developed and errors are resolved.

