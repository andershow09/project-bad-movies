# Bad Movies

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This app is a curated list of movies that are considered to be of poor quality provide the nominees and winners of the Worst Picture category at the Golden Raspberry Awards. It consists of two main pages: the Dashboard and the Movie List.

The Dashboard provides users with a wealth of information about movies and their respective producers. It presents various data points such as ratings, reviews, budgets, and box office performances.

The Movie List page allows users to explore and filter movies based on specific criteria. Users can filter movies by year of release and whether or not they were nominated or won awards for that year.

Overall, this app aims to provide users with a comprehensive and user-friendly platform to explore and analyze the world of bad movies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

Step 1: Install Ionic CLI  
`npm install -g @ionic/cli`  
Step 2: Install Dependecies  
`npm install`

## Usage

### Run

Step 1: Build the App  
`ionic build`  
Step 2: Run the App in Android  
`npx cap open android`  
Step 3: Run the App in iOS  
`npx cap open ios`

Or you can use the follow code to run:  
`ionic capacitor run android | ios`

### Testing

You can use the follow code to test:  
`npm test`

### Deploy

You can use the follow code to deply the app:  
`npx ionic build  --configuration=production && npx cap copy`
