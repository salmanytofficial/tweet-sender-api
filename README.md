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

# Twitter API Node.js App

## API Routes

### 1. **/login**
- **Description**: Redirects to Twitter for OAuth authentication.
- **Method**: GET
- **Usage**: http://your-app.onrender.com/login

---

### 2. **/callback**
- **Description**: Handles OAuth callback from Twitter and exchanges the authorization code for an access token.
- **Method**: GET
- **Usage****: http://your-app.onrender.com/callback?code=YOUR_AUTH_CODE&state=my-state

---

### 3. **/tweets**
- **Description**: Sends a tweet using the provided text from the query parameter `text`.
- **Method**: GET
- **Usage**: http://your-app.onrender.com/tweets?text=Hello+World
- **Query Parameter**: 
  - `text` (Required): The text of the tweet.

---

## Hosting on Render

1. Sign up for Render and create a new Node.js service.
2. Set the environment variables on Render (as mentioned above).
3. Deploy your app.
4. Your friend can use the deployed URL to send tweets via the API.

---

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

---

## License

This project is licensed under the MIT License.

