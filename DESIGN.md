# Backend Requirements

> Upload an image. `POST /api/image { data: string, name: string }`
- It should throw a 400 error if there is a duplicate name.
- The data will be a base64 encoded string.

> Update an image. `PUT /api/image { data: string, name: string}`
- If the resource with that name doesn't exist throw a 404 error.

> Get an image `GET /api/image/:name`
- It should return the image data for an image with a given name. 
- It should return a 404 not found if not exists.
- The data type should contain:
```json
{
  "data": "=b64afasdASDEKJlknk23n4...",
  "rating": 1.40,
  "name": "big_hotdog",
  "ratings": []
}
```

> Get all images `GET /api/images`
- Should return a list of images.

> Get a rank for an image `GET /api/image/:name/rank`
- If the image doesn't exist return a 404.
- If there is no ratings, return undefined.
- Return the average of the ranks array for that image.

> Rank an image. `POST /api/image/:name/rank { rating: number }`
- If the image doesn't exist return a 404.
- If the number is less than 1 or greater than 5 return a 400 error.
- Add the rating to the ratings array for that image.