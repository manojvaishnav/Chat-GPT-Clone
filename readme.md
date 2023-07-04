# Chat-GPT-Clone

Welcome to Chat-GPT-Clone, a Multi-Functional MERN project powered by OpenAI API!

## Project Overview

Chat-GPT-Clone is a versatile application that incorporates various AI-driven functionalities such as text summarization, paragraph generation, chatbot interactions, JavaScript code conversion, and sci-fi image generation. This project serves as an excellent showcase of the capabilities of the OpenAI API.

## Folder Structure

The project follows the following folder structure:

backend/ // Backend server implementation
client/ // Frontend client implementation


- The `backend/` folder contains the server-side implementation, built with Node.js and Express.js. It handles API requests, interacts with the OpenAI API, and communicates with the database.
- The `client/` folder contains the client-side implementation, built with React.js. It provides the user interface for interacting with the various functionalities of the application.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed on your system:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

git clone https://github.com/manojvaishnav/Chat-Gpt-Clone.git


2. Navigate to the project root directory:

cd Chat-Gpt-Clone


3. Install dependencies for both the backend and client:

cd backend <br>
npm install <br>
cd ../client <br>
npm install


## Configuration

To configure the application, create a `.env` file in the `backend/` directory and add the following environment variables:

OPENAI_API_KEY=<Your OpenAI API Key> <br>
MONGO_URI=<Your MongoDB URI> <br>
JWT_ACCESS_SECRET=<Your JWT Access Secret> <br>
JWT_REFRESH_TOKEN=<Your JWT Refresh Token> <br>

## Add proxy
To connect frontend with the backend add proxy:
cd client <br>
go to packege.json <br>
add "proxy":"http://localhost:8000"

Make sure to replace the placeholders with your own values.

## Usage

1. Start the backend server:

cd backend <br>
npm start <br>

2. Start the client:

cd client <br>
npm start <br>


3. Access the application by opening your browser and visiting [http://localhost:3000](http://localhost:3000).

