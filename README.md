# Problem Description

Create a simple full-stack application using React for the client-side code and Node.js for a simple backend server. Given a JSON data set, populate a database of your choice. Using that dataset, create an application that allows users to browse a beer database and also display a ‘draft menu’.

One page of the app should be a draft menu (think like a beer menu at a bar) that a user could use to display their currently tapped beers. Another page of the app should be a simple browser for the database, which also allows the user to add beers to the draft menu or remove them. The data should be organized in a logical way, and provide some means of searching or sorting.

## Solution Approach

The webpage is deployed as a single page app residing in an AWS S3 bucket. The database sits within an AWS VPC accessed through an EC2 instance.

As a general approach, the spa/backend combination is designed to push data and processing burden to the client side. This is to allow the server to run in the least expensive AWS EC2 and RDS tiers. Additionally, server calls by the front end are kept to a minimum. Data parsing and manipulation for user interface is done using standard ES6 functions.

My understanding is that this is meant to be a demonstration of my coding. To that end, imports of external packages is kept to a minimum. For example, rather than importing a type-ahead style selector for breweries, this component was created from scratch.

**Frontend**

The SPA is a react/redux application. Server calls are done using the [redux-thunk middleware](https://www.npmjs.com/package/redux-thunk).

The data in the starter file is not "cleaned." For example, abv is not consistently stored with a % character, ibu values are inconsistent and often missing. I assume this was to see how unclean data was handled. Additionally, I assume this represents current state for the production system. Rather than cleaning the data before storing, I assumed this couldn't be done in real life. As such, the data cleaning occurs in the frontend upon initial data retrieval.

**Backend**

The server side of application resides in an Amazon Web Service Virtual Private Cloud (AWS VPC).

Rather than spinning-up an additional VPC/EC2/RDS environment, the server code to support this assignment was added to the environment I use to run Pinetop Distillery. The github repo for this server can be found at [AmazonEC2ServerTest](https://github.com/gradybknight/AmazonEC2ServerTest). Relevant routes begin at line 84 of server.js. This imports from ./database/bruvueOperations.js (where relavent sql calls reside).
