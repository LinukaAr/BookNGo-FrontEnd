# TicketingTool Frontend

## Introduction
This is the frontend part of the TicketingTool project, built with Angular. It provides a user interface for managing and viewing ticketing information in real-time.

## Setup Instructions

### Prerequisites
- Node.js version 18 or higher
- Angular CLI version 14.2.9

### How to Build and Run the Application
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/ticketing-tool-frontend.git
   cd ticketing-tool-frontend

2. Install dependencies:
    ```sh
    npm install

3. Run the development server:
    ```sh
    ng serve

4. Open your browser and navigate to http://localhost:4200/.


## Usage Instructions
# How to Configure and Start the System
 
**O** Ensure the backend server is running and accessible.

**O** Update the WebSocket URL in websocket.service.ts if necessary.

# Explanation of UI Controls

**Real-Time Chart:** Displays real-time ticket counts. The chart updates automatically as new data is received via WebSocket.

**Log Display:** Shows the latest logs received from the backend. The blinking red circle indicates the current ticket count status.

## Troubleshooting
If you encounter any issues during setup or runtime:

* Check for dependency compatibility.
* Refer to the Angular CLI documentation for additional guidance.
