SurePrep Coding Challenge
===

A travel agency in Irvine needs a new frontend to let clients search for flights
to and from exciting destinations around the world. The flight data is provided
by a 3rd party legacy system, but management wants to modernize the frontend.

The designers have created a static mockup that illustrates what a search result
should look like. Your job is to transform the static design mockup into a
single page React application.

You have four hours to implement the features described further below. Make
sure you've read and understood the technical requirements and features before
you start coding.

Technical Requirements
===

We've set up a skeleton React project with the static design mockup, sample
legacy data and all the basic NPM dependencies you need to get started.

### React

Please implement your solution using the React library. Do not add NPM packages
with 3rd party React components or other UI features. We want to see how you
work with the basic features provided by the React library.

### Redux

We would love to see how you manage the state of your application with Redux if
you are comfortable with Redux and React-Redux and feel confident you can
implement a solution under the time constraints. To that end, we have also
included the Redux and React-Redux NPM packages. Do not add or use NPM packages
with more advanced Redux support. We want to see how you work with the basic
features provided by the Redux and React-Redux libraries.

Submission
===

When you're ready to submit your solution, zip up everything *except*
`node_modules` and email the zip file to us. Some email services block
attachments with JavaScript -- if you run into this, please try a cloud
drive service or the free file transfer service WeTransfer.com

Core Features
===

 1. The single page application is shown with a text input at the top along
    with two buttons for displaying respectively outbound and inbound flights in
    the destination results below.

 2. No destinations should be matched until a text input has been given.

 3. Text entered in the text input should be matched against airport names,
    IATA codes and cities. Partial matches should be allowed.

 4. Make sure to exclude LAX from the destination result set.

 5. When multiple airports match the text input, then the following properties
    should be displayed for each matching airport:

      * The city and country of the airport
      * The airport name and IATA code

 6. When a single airport matches the text input, then the following properties
    should be displayed:

      * The city and country of the airport
      * Airline routes -- see requirements 7 and 8.
      * A map centered on the latitude and longitude of the airport
      * The airport name and IATA code

 7. When the outbound button is selected, airline routes should be filtered on
    departures from LAX that arrive at the matched airport. For each matching
    route, the airline, the departure time and the week days with outbound
    flights should be displayed.

Optional Requirements
---

It is important you focus on developing a solid implementation of the core
requirements. However, if you find yourself with time to spare, here are some
additional features you might want to try to implement.

 8. When the inbound button is selected, airline routes should be filtered on
    departures from the matched airport that arrive at LAX. For each matching
    route, the airline, the arrival time and the week days with inbound flights
    should be displayed.

 9. Sort airport matches by city name

 10. Sort airline routes by departure/arrival time

 11. When no airport can be matched, display a message to that effect

Sample implementation
---

See [demo.gif](demo.gif) for a recording of a sample implementation.

Legacy Data
===

The 3rd party legacy system provides two data sets:

- `data/airports.json` contains a JSON array with airport definitions.

- `data/airlines.json` contains a JSON array with airline and route
  definitions. Route departure and arrival airports are identified with ICAO
  codes.

Do not modify the JSON files. You are welcome to manipulate and modify the data
in memory as needed.

Installation
===

Make sure you have a recent version of Node.js installed. You can grab the latest version from [nodejs.org](https://nodejs.org).

Run `npm install` or `yarn install` to install the project dependencies.

Launch the Development Server
===

Run `npm start` to launch the development server. Consult the documentation to [create-react-app](https://github.com/facebookincubator/create-react-app) if
you want to learn more about the development environment.
