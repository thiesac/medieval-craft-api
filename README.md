# MedievalCraft API

Welcome to the MedievalCraft API, an API for managing a store of medieval items, including custom-made swords. This API was developed using Typescript and Sequelize and includes JWT authentication as well as tests to ensure the correct functioning of the features.

## Technologies Used

- **Typescript**: The API is developed using Typescript, which provides static typing and improved developer tooling for JavaScript.

- **Sequelize**: Sequelize is used as the Object-Relational Mapping (ORM) tool for interacting with the database. It simplifies database operations and allows you to work with a variety of database systems.

- **JWT Authentication**: JSON Web Tokens (JWT) are used for user authentication. This secure method of authentication is widely adopted for securing APIs.

- **Testing Framework**: The API includes a testing framework for ensuring the reliability of the Service and Controller layers.

## Installation

Follow these steps to set up and run the API on your machine:

1. Clone the repository:

```bash
git clone https://github.com/thiesac/medievalcraft-api.git
```

2. Navigate to the project directory:

```bash
cd medievalcraft-api
```

3. Install dependencies:

```bash
npm install
```

4. Configure the database. Make sure to set up the database credentials in the `.env` file.

5. Run database migrations:

```bash
npm run sequelize db:migrate
```

6. Start the server:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## Usage

Here are the main functionalities of the API:

### Product Registration

To register a new product, make a POST request to `/products`. The request body should follow the structure below:

```json
{
  "name": "Thor's Hammer",
  "price": "30 pieces of gold",
  "orderId": 4
}
```

Please note that the `orderId` field should be unique for each product since the products are unique. The registered products will be saved in the products table of the database.

### Product Listing

To list all available products, make a GET request to `/products`. This will return a list of registered products.

### Order Listing

To list all orders and the associated products, make a GET request to `/orders`.

### User Login

To log in as a user, make a POST request to `/login`. The request body should follow the structure below:

```json
{
  "username": "your-username",
  "password": "your-password"
}
```

If the credentials are valid, a JWT token will be generated and returned in the response. You can use this token to authenticate other requests.

Be sure to test the API's functionalities and explore more details in the endpoint documentation.

## Testing

The API includes tests to ensure the correct functioning of the Service and Controller layers. You can run the tests using the following command:

```bash
npm test
```

This will ensure that the API is working as expected.

Enjoy using the MedievalCraft API to manage your medieval items store!

## Contributing

Contributions to this project are welcome! If you have bug fixes, feature additions, or improvements, please feel free to open an issue or submit a pull request.



## Acknowledgments

I would like to acknowledge and express my gratitude to [Trybe](https://www.betrybe.com/) for their support and guidance throughout the development of this educational resource.

