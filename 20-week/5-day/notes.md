# 🐍 `S`uper `S`peedy `S`aturday `S`tudy `S`ession `S`hall `S`ave `S`tudent `S`anity 🐍

## Aggregates & Subqueries

Not needed for our assessment (other than 1 MC), but we'll use them starting next week

### Aggregates - Functions used for math things

- `COUNT()` - The number of entries
- `MIN()` - The lowest value
- `MAX()` - The highest value
- `SUM()` & `TOTAL()` - Adds up the values
- `AVG()` - The average of the values

### Subqueries - Using multiple queries at once to `INSERT` dynamically or replace `JOIN`s

- Yo dawg
- I heard you like `queries`
- So I put a `query`
- In your `query`
- So you can `query`
- While you `query`

---

# Express things that might be worth remembering 🤷‍♀️

## Does this work?

```js
const babyThatHasTrustInItsFunds = require("express");

const softHandsThatHaveNeverSeenHardWork = babyThatHasTrustInItsFunds();

// ...

softHandsThatHaveNeverSeenHardWork.listen(5000, () =>
  console.log("Server is running!")
);
```

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>
Yes it will! Express's export is <span style="font-weight: bold; font-style: italic;">unnamed</span>, so we can name it whatever we want!

</details>

<br/>

---

## Which URL will return "Love this game"?

1. `/Lies-Of-P`
2. `/genre/Lies-Of-P`
3. `/souls-like/Lies-Of-P`
4. `/genre/souls-like/Lies-Of-P`
5. None of the above

```js
const express = require("express");
const app = express();

const gameRouter = express.Router();
const genreRouter = express.Router();

gameRouter.get("/:name", (req, res) => {
  res.send("Love this game");
});

genreRouter.use("/souls-like", gameRouter);
app.use("/genre", genreRouter);

app.listen(5000, () => console.log("Server is running!"));
```

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>

<span style="font-weight: bold; font-style: italic;"># 4</span>

Remember:

- You can chain/nest routers as much as you want
- A router must be <span style="font-weight: bold; font-style: italic;">used</span> for it to be hit
  - This server's `app.use()` is the first accessible line on each request
  - That triggers `genreRouter.use()`
  - Only then will `gameRouter.get()` run

</details>

---

## Which server automatically parses request bodies, HTTP or Express?

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>

<span style="font-weight: bold; font-style: italic;">NEITHER!!!</span>

- HTTP requires that we parse it manually
- Express requires that we use `express.json()`
  - This does the work for us, but we still have to tell express to use it!

</details>

<br/>

---

## Does `app.get()` use exact URLs or URL patterns?

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>

All express routes are <span style="font-weight: bold; font-style: italic;">pattern matched.</span>

It might seem like `app.get("/home", ...)` is matching an exact URL, since only a single URL can hit this route.

But consider the fact that `app.get("/home/:userId", ...)` can match an infinite number of URLs, as long as the <span style="font-style: italic;">pattern</span> of `/home/something` is matched!

</details>

<br/>
