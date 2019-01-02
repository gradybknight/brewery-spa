# Deployed at [Bruvue Test](http://bruvue-test.s3-website-us-east-1.amazonaws.com)

## Website Structure and Rationale

The root path lands at the Bar Menu. This will update showing the current menu for the bar. My assumption is that this would be used to display the menu to the client. As such, this simply displays the current beer menu with no ability to modify.

The second link is the management window. In a production ready app, I would protect this path with password authentication. This path allows the user to select beers to add/remove from the bar menu.

The user can click 'Show All Beers' to see the unrestricted list of beers. Alternatively, the user can select 'Filter The Beers' to show a set of means to restrict the full list.

The next section asks the user how restriction criteria should be chosen: should multiple criteria be treated as an AND or an OR intersection:

For example, selecting OR while choosing 'TROUT TOWN' along with the keyword 'ENGLISH' will yield 24 beers. This is the union set of TROUT TOWN's beers and all others with the word 'ENGLISH' in their description. Choosing AND as the restriction type will yield 3 beers: TROUT TOWN's ENGLISH beers.

Additionally, a range of IBU and ABV can be used as restriction criteria by selecting the range and clicking the check mark.

Restriction criteria can be removed from the list by clicking the 'X' on the card which appears under the restriction area.

Results from the filtering can be added to the Bar Menu by clicking the check mark next to the beer. In a similar manner, the beer can be removed from the menu by clicking the 'X' in the beer menu column.

# Problem Description

Create a simple full-stack application using React for the client-side code and Node.js for a simple backend server. Given a JSON data set, populate a database of your choice. Using that dataset, create an application that allows users to browse a beer database and also display a ‘draft menu’.

One page of the app should be a draft menu (think like a beer menu at a bar) that a user could use to display their currently tapped beers. Another page of the app should be a simple browser for the database, which also allows the user to add beers to the draft menu or remove them. The data should be organized in a logical way, and provide some means of searching or sorting.

## Solution Approach

The webpage is deployed as a single page app residing in an AWS S3 bucket. The database sits within an AWS VPC accessed through an EC2 instance.

As a general approach, the spa/backend combination is designed to push data and processing burden to the client side. This is to allow the server to run in the least expensive AWS EC2 and RDS tiers. Additionally, server calls by the front end are kept to a minimum. Data parsing and manipulation for user interface is done using standard ES6 functions. Data is managed using Redux.

My understanding is that this is meant to be a demonstration of my coding. To that end, imports of external packages is kept to a bare minimum. External libraries such as Bootsrap or Material-UI were not used.

**Frontend**

The SPA is a react/redux application. Server calls are done using the [redux-thunk middleware](https://www.npmjs.com/package/redux-thunk).

The data in the starter file is not "cleaned." For example, abv is not consistently stored with a % character, ibu values are inconsistent and often missing. I assume this was to see how unclean data was handled. Additionally, I assume this represents current state for the production system. Rather than cleaning the data before storing, I assumed this couldn't be done in real life. As such, the data cleaning occurs in the frontend upon initial data retrieval.

While there is cleaning performed on the frontend to make IBU and ABV range selection work, I did not spend time cleaning descriptions.

To speed key word searching, upon initial retrieval of the beers list, each beer's description is parsed to create a dictionary of keywords. The key word acts as the key and an array of all beers' containing the key word is the property. By doing this, selecting for a key word will yield all the associated beers in O(1).

**Backend**

The server side of application resides in an Amazon Web Service Virtual Private Cloud (AWS VPC).

Rather than spinning-up an additional VPC/EC2/RDS environment, the server code to support this assignment was added to the environment I use to run Pinetop Distillery. The github repo for this server can be found at [AmazonEC2ServerTest](https://github.com/gradybknight/AmazonEC2ServerTest). Relevant routes begin at line 78 of server.js. This imports from ./database/bruvueOperations.js (where relavent sql calls reside).

Additionally, since the server side sits in a larger code set, gists for the [routes](https://gist.github.com/gradybknight/de78b9fe36d688db99598d698990fbaf) and [database calls](https://gist.github.com/gradybknight/abf1fa301d2f5232a1fc2f3b2c7fcef1) are included.
