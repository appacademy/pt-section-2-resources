# Pagination Practice


This practice is to help prepare you for the upcoming assessment on 4/22.

## Setup
We're working in the W23 Day-5 "pagination-practice" folder.  The models/migrations/seeders are already complete.

1. npm install
2. Create your `.env`
2. Run your migrations
3. Run your seeders
4. Check to make sure your DB is populated

## Exercise

Implement pagination.

When a user makes a request to `/pets`, you should use the `Pet` model to find pets in your Database filtering the search by the request's query parameters.  You should return a JSON response that includes a key called "Pets" whose value is an array of pet objects.
- Look at the examples below for further details.

Each request should include query paramesters of `page` and `size`.

## Example Req & Res

Example request:

`GET /pets?page=1&size=1`

Example response:

```json
{
    "Pets": [
        {
            id: 1,
            petName: "Lucky",
            image: "bark.jpg"
            ownerId: 1,
            createdAt: "2024-04-13T07:48:54.066Z",
            updatedAt: "2024-04-13T07:48:54.066Z"
        }
    ]
};
```

## Test it Out

After you've implemented the logic in your route handler, test it out live:
- `npm run dev`
- Go to `localhost:8001` in your browser.
- Start scrolling "infinitely"!
- There should be 200 pets to scroll through (most are cats; some migtht be duplicates)
