# Twitter API Node.js App

## Overview
This is a simple Node.js application that interacts with the Twitter API to send tweets. The app allows users to authenticate via OAuth and send tweets using a specified text via a query parameter.

## Prerequisites
- A Twitter Developer account with access to API keys (`CLIENT_ID`, `CLIENT_SECRET`).
- Node.js installed on your machine.

## Environment Variables
To run this project, you'll need to set up the following environment variables:
- `CLIENT_ID` (Your Twitter API client ID)
- `CLIENT_SECRET` (Your Twitter API client secret)
- `ACCESS_TOKEN` (Optional: Your Twitter access token, if you already have one)
- `ACCESS_TOKEN_SECRET` (Optional: Your Twitter access token secret, if needed)
- `URL` (Base URL, e.g., `http://your-app.onrender.com`)
- `PORT` (Default: `3000`)

### Sample `.env` File:
```env
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
URL=http://your-app.onrender.com
PORT=3000
