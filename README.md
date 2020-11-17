# Travel Booking Application

## Table of Contents

1. [LoaderIO] (#loaderio)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API Routes](#apiroutes)

## LoaderIO

> Get Request
![getrequest](https://i.imgur.com/SfaqvEE.png)
> Post Request
![getrequest](https://i.imgur.com/a0c4v5t.png)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh

npm install
```

## Server API

### Get reviews info for particular listing
  * GET `/api/rooms/:roomID/reviews`

**Path Parameters:**
  * `roomID` room id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "reviewID": "Number",
      "userID": "Number",
      "userName":"String",
      "userPic" : "String",
      "review": "String",
      "roomsID": "Number",
      "cleanRating": "Number",
      "accuracyRating": "Number",
      "commnRating": "Number",
      "locRating": "Number",
      "checkInRating": "Number",
      "valueRating": "Number",
      "reviewDate": "Date",
      "ownerName": "String",
      "ownerResponse": "String",
      "ownerResponseDate": "Date"
    }
```

### Add review
  * POST `/api/rooms/:roomID/reviews`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "reviewID": "Number",
      "userID": "Number",
      "userName":"String",
      "userPic" : "String",
      "review": "String",
      "roomsID": "Number",
      "cleanRating": "Number",
      "accuracyRating": "Number",
      "commnRating": "Number",
      "locRating": "Number",
      "checkInRating": "Number",
      "valueRating": "Number",
      "date": "Date"
    }
```

### Update review info
  * PATCH `/api/rooms/:roomID/reviews/:reviewID`

**Path Parameters:**
* `roomID` room id
* `reviewID` review id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
     {
      "reviewID": "Number",
      "review": "String",
      "roomsID": "Number",
      "cleanRating": "Number",
      "accuracyRating": "Number",
      "commnRating": "Number",
      "locRating": "Number",
      "checkInRating": "Number",
      "valueRating": "Number",
      "date": "Date"
    }
```

### Delete review
  * DELETE `/api/rooms/:roomID/reviews/:reviewID`

**Path Parameters:**
* `roomID` room id
* `reviewID` review id

**Success Status Code:** `204`

```json
    {
      "reviewID": "Number"
    }
```

