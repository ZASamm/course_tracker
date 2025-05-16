# Maths Study Tracker Backend

This project is a backend application for the Maths Study Tracker, designed to manage study items for A-Level Maths. It provides a RESTful API to create, read, update, and delete study items.

## Project Structure

```
maths-study-tracker-backend
├── src
│   ├── controllers          # Contains the controller logic for handling requests
│   ├── models               # Defines the data models and interfaces
│   ├── routes               # Sets up the API routes
│   ├── services             # Contains business logic for managing study items
│   ├── utils                # Utility functions, such as database connection
│   └── index.ts             # Entry point of the application
├── package.json             # NPM package configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd maths-study-tracker-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

- `GET /study-items` - Retrieve all study items
- `POST /study-items` - Create a new study item
- `PUT /study-items/:id` - Update an existing study item
- `DELETE /study-items/:id` - Delete a study item

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.