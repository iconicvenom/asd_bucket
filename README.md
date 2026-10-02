# Product API with Middleware Caching

## Setup

```bash
npm install
npm start
```

The server runs at `http://localhost:3000`.

## Endpoints

- `GET /products` — list products
- `GET /products/:id` — get one product
- `POST /products` — create a product
- `PUT /products/:id` — update a product
- `PATCH /products/:id` — partially update a product
- `DELETE /products/:id` — delete a product

## Cache behavior

- GET responses are cached by URL.
- `X-Cache: MISS` is returned when the response is not in cache or the entry has expired.
- `X-Cache: HIT` is returned when a valid cached response is used.
- Entries expire after 60 seconds.
- Successful write requests clear all cached entries.

The database is an in-memory array for workshop/demo use. Data resets when the server restarts.
