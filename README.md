# Node.js File System Task

This project demonstrates how to use **Node.js** and **Express.js** to create and retrieve files in a specific directory. The application includes two API endpoints:

1. **Create a file** with the current timestamp as content.
2. **Retrieve all `.txt` files** from the directory.

---

## Features

- Create a `.txt` file with the current date and time as the filename and the current timestamp as its content.
- List all `.txt` files in a designated folder.

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Steps

1. Clone this repository:
   ```bash
   git clone <repository_url>
   cd nodejs-file-system-task
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   git clone <repository_url> 
   node file-system-server.js
   ```
4. The server runs at:
   ```bash
   http://localhost:3000
   ```

---

## API Endpoints

### 1. Create File

- **URL**: `/create-file`
- **Method**: `GET`
- **Description**: Creates a `.txt` file in the `files` folder with:
  - **Filename**: `YYYY-MM-DD_HH-MM-SS.txt` (e.g., `2024-11-27_14-45-00.txt`)
  - **Content**: Current timestamp (e.g., `2024-11-27T14:45:00.000Z`)
- **Response**:
  - **Success**: `File created: <filename>`
  - **Error**: `Error creating file`

### 2. List Files

- **URL**: `/list-files`
- **Method**: `GET`
- **Description**: Retrieves a list of all `.txt` files in the `files` folder.
- **Response**:

  ```json
  ["2024-11-27_14-45-00.txt", "2024-11-27_15-00-00.txt"]
  ```

---

## Folder Structure
``` 
nodejs-file-system-task/
│
├── files/                  		# Folder where files are stored
├── file-system-server.js   	# Main application file
├── package.json            	# Project metadata and dependencies
└── README.md              	 # Project documentation
```
---

## Testing the APIs

You can test the API endpoints using **Postman**, **cURL**, or a web browser.

---

## Example Requests

### Create File

- **URL**: `http://localhost:3000/create-file`
- **Method**: `GET`
- **Response**:
  ```yaml
  File created: 2024-11-27_14-45-00.txt
  ```

### List Files

- **URL**: `http://localhost:3000/list-files`
- **Method**: `GET`
- **Response**:
  ```yaml
  ["2024-11-27_14-45-00.txt", "2024-11-27_15-00-00.txt"]
  ```
