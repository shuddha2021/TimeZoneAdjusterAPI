# Timezone API

## Overview
This repository contains a Node.js Express application that provides a RESTful API with a single endpoint, `GET /time`. This endpoint returns the current date and time in UTC format and, optionally, the adjusted time for a specified timezone.

## Features
- **Current Time**: Returns the current UTC time.
- **Timezone Adjustment**: Optionally accepts a `timezone` query parameter to return the time adjusted to the specified timezone.

## Getting Started

### Prerequisites
- Node.js (Recommended version: 16.x or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/shuddha2021/test-dwella-2.git
Navigate to the project directory:
cd test-dwella-2

Install the dependencies:
npm install

### Running the Application
To start the server, run the following command:

npm start

The server will start running on http://localhost:3000.

### Using the API
To get the current UTC time:

curl http://localhost:3000/time

To get the time adjusted to a specific timezone (e.g., America/New_York):

curl http://localhost:3000/time?timezone=America/New_York

### Testing
To run the automated tests for the API, execute:

npm test

### Continuous Integration
This project uses GitHub Actions for continuous integration. Upon each push or pull request, the tests are automatically run to ensure code quality and functionality.

### Deployment
The application can be deployed to cloud platforms like Vercel or Heroku. The main branch is production-ready and can be used for deployments.

### License
This project is licensed under the ISC License - see the LICENSE file for details.

### Author
Shuddha Chowdhury - shuddha2021

### Acknowledgements
- Node.js community
- Express.js team
- Moment Timezone contributors
