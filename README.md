# Web Development Project 5 - *WeatherBoard*

Submitted by: **Hafsa Sarker**

This web app: **Fetches data from the Weatherbit API and displays them in a table manner to the user. The user can also see past weather as well as filter through them by date and cloud coverage.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] *current location, time, temperature and cloud coverage*
  - [X] *past weather history including low, high, and precipitation*

- [X] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types such as a text input, a selection, or a slider
- [x] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='.\DataDashboard\public\project5.gif' title='Video Walkthrough' width='700' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCAP 

## Notes

While building the user inputs, I realzed that everytime the inputs changed, the data rendered was not updating. After poking here and there through my code, I remembered the effect of using the effect hook and its dependency array. My dependency array was empty so data was being fetched as soon as page rendered only, not everytime inputs changed. So I set the dependency array to my "inputs" state. Ta-da! It worked!

## License

    Copyright [2023] [Hafsa Sarker]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.