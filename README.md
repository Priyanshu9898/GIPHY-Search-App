
# GIF Finder - GIF Search App

## Live Website: https://giphy-search-app-eight.vercel.app/

## Project Description:

    A React.js web application that allows users to search for GIFs using the GIPHY API. Users can log in or sign up using Firebase Authentication to access the GIF search functionality. The application fetches trending GIFs by default and updates the results based on the user's search input.


## Tech Stack

**Frontend:** React, APIs, JavaScript, React-Bootstrap


## Features

    - Firebase Authentication (Email/Password based login and signup)
    - Search for GIFs using the GIPHY API
    - Display trending GIFs by default
    - Pagination for browsing through GIFs
    - Hot search: Instantly update search results while typing
    - Loading animations for better user experience
    - Hosted on Vercel

## Getting Started
    These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites
- Node.js (v14.x.x or higher recommended)
- npm (v6.x.x or higher recommended)

## Installation

    1. Clone the repository
```bash
  git clone https://github.com/Priyanshu9898/GIPHY-Search-App.git

```

    2. Install dependencies 
```bash
  cd GIPHY-Search-App
  npm install
```

    3. Set up your GIPHY API key and Firebase configuration
    
        Create a .env file in the root of your project and add your GIPHY API key and Firebase configuration:
```bash
  REACT_APP_GIPHY_API_KEY=GlVGYHkr3WSBnllca54iNt0yFbjz7L65
  REACT_APP_FIREBASE_API_KEY="AIzaSyCXpJ87i1ZeF6EjOQWdSLJAPB6yyekREP8"
  REACT_APP_FIREBASE_AUTH_DOMAIN="giffy-search-app.firebaseapp.com"
  REACT_APP_FIREBASE_PROJECT_ID="giffy-search-app"
  REACT_APP_FIREBASE_STORAGE_BUCKET="giffy-search-app.appspot.com"
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID="603094905845"
  REACT_APP_FIREBASE_APP_ID="1:603094905845:web:d9be11923f97cf41c8e6bc"
  REACT_APP_MEASUREMENT_ID="G-WGSYZ2M8MC"

```
    4. Start the development server
```bash
  npm start
```

    This will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

## Building for production
    To create a production build, run:

```bash
npm run build
```

    This will build the app for production and output the files to the build folder. The build is minified, and the filenames include the hashes for efficient caching.


## API Reference

#### Get all items

```http
  POST api/process_image
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `image` | `file` |  Image For segmentation |


## In-depth Features Description


- #### Firebase Authentication (Email/Password based login and signup)

    The application uses Firebase Authentication to manage user accounts. This allows users to securely sign up and log in using their email addresses and passwords. Firebase takes care of the entire authentication process, including storing user data and handling password resets. This allows the application to focus on its core functionality while providing a secure and reliable user authentication system.

- #### Search for GIFs using the GIPHY API

    The core feature of the application is to search and display GIFs from the GIPHY API. Users can enter a search query, and the application fetches relevant GIFs using the GIPHY API's search endpoint. The search results are then displayed in a responsive grid layout, with each GIF accompanied by its title. This enables users to easily find and browse GIFs based on their interests.

- #### Display trending GIFs by default

    When the application is first loaded or when the search input is cleared, the app fetches and displays trending GIFs from the GIPHY API. This provides an engaging user experience, as users are presented with popular and up-to-date content by default. Trending GIFs are retrieved using the GIPHY API's trending endpoint, which returns a list of currently popular GIFs on the platform.

- #### Pagination for browsing through GIFs
    The application implements pagination to allow users to easily browse through large numbers of GIFs. Search results are limited to a fixed number of GIFs per page (e.g., 12). Users can navigate through the pages of results using "Previous" and "Next" buttons. This improves the user experience by preventing the page from becoming cluttered with too many images and reducing the amount of data loaded at once.

- #### Hot search: Instantly update search results while typing
    The application features a "hot search" functionality that updates search results in real-time as users type in the search input. This provides a more interactive and responsive user experience, as users can quickly refine their search queries without having to submit a form or click a button. This feature is implemented by fetching search results from the GIPHY API each time the search input value changes.

- #### Hosted on Vercel
    The application can be deployed and hosted on popular platforms like Vercel. This allows users to access the app through a public URL, providing a seamless experience without requiring them to set up the project locally. Both Vercel and GitHub Pages offer free hosting options for static websites, making them ideal choices for deploying a React application like this one.

- #### Cross-platform Compatibility:
    The application is compatible with different platforms, as it is built using popular web technologies such as React. Users can access it through modern web browsers without needing to install additional software.


- #### Ease of Deployment: 
    The project can be easily deployed on various hosting platforms, thanks to React.

## Screenshots

![App Screenshot 1](https://i.postimg.cc/Jz6CPxNL/React-App-Brave-23-04-2023-12-22-16.png)

![App Screenshot 4](https://i.postimg.cc/1z8hTFBN/React-App-Brave-23-04-2023-12-54-44.png)

![App Screenshot 2](https://i.postimg.cc/LsGKMsQQ/React-App-Brave-23-04-2023-12-22-34.png)

![App Screenshot 3](https://i.postimg.cc/50vc9MZ4/React-App-Brave-23-04-2023-12-23-36.png)




## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Priyanshu9898/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/priyanshumalaviya/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Priyanshu2281)
[![Medium](https://img.shields.io/badge/medum-1DA1F2?style=for-the-badge&logo=medium&logoColor=black)](https://medium.com/@priyanshumalaviya9210)
## Demo

Insert gif or link to demo


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License

[MIT](https://choosealicense.com/licenses/mit/)

