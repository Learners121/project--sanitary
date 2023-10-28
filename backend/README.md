# Sanitary Product Management System

The Sanitary Product Management System is an Express.js-based web application that allows you to manage sanitary products and categories. This README provides an overview of the project's structure and functionality.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Routes](#routes)
- [Controllers](#controllers)
- [Services](#services)
- [Database Setup](#database-setup)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is organized into several modules and follows a modular structure for improved maintainability. Here's an overview of the project's structure:

- `server.js`: The main server file that sets up the Express.js server.
- `routes`: Contains route definitions for different parts of the application.
- `controllers`: Defines controller functions to handle route logic.
- `services`: Implements business logic and interacts with the database.
- `database`: SQL script for creating the database and tables.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   for HTTPS

   ```bash
   git clone https://github.com/Learners121/project--sanitary.git
   ```

   for SSH

   ```bash
   git@github.com:Learners121/project--sanitary.git
   ```

2. Navigate to the project directory:

   ```bash
   cd project--sanitary/backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the project's root directory and configure it with the following environment variables:

```env
PORT=NODE-PORT
DATABASE_PORT=MYSQL-PORT
DATABASE_HOST=DB-HOST
DATABASE_USER=DB-USER
DATABASE_PASSWORD=DB-PASSWORD
DATABASE_NAME=DB-NAME
```

Make sure to update the values to match your specific configuration. The `.env` file is used to store sensitive information, so keep it secure and do not share it in public repositories.

## Usage

To start the application, run the following command:

```bash
npm start
```

The application will be accessible at `http://localhost:8000` by default. Be sure to update the port in the `.env` file if necessary.

## Routes

The application provides the following routes:

- `/user`: User-related routes.
- `/add-product`: Routes for adding new products.
- `/view-product`: Routes for viewing product details.
- `/billing-history`: Routes for billing history.
- `/pending-bills`: Routes for managing pending bills.

Each route provides specific functionality for its respective feature.

## Controllers

Controllers handle the routing logic and interact with services. The available controllers include:

- `userController`: Manages user-related actions.
- `addProductController`: Handles product addition.
- `viewProductController`: Manages product viewing.
- `billingHistoryController`: Controls billing history operations.
- `pendingBillsController`: Handles pending bills.

## Services

Services contain the core business logic and interact with the database. The services available in the project are:

- `userServices`: Manages user-related services.
- `addProductServices`: Implements product addition and updates.
- `viewProductServices`: Provides product-related services.
- `billingHistoryServices`: Manages billing history services.
- `pendingBillsServices`: Handles pending bill services.

## Database Setup

The database structure is defined in the provided SQL script. To set up the database:

1. Ensure you have a MySQL server up and running.

2. Run the SQL script by executing the following command, replacing `<your_database_credentials>` with your actual database credentials:

   ```bash
   mysql -u <your_database_user> -p < database/setup.sql
   ```

   You will be prompted to enter your database password.

   For example:

   ```bash
   mysql -u root -p < ./database/database_structure.sql
   ```

This will create the "SANITARY" database with the specified tables.

## Contributing

anyone that is collaborater can contribute, rules will be take pull from main and create separate branch once you done with the branch create pull request your request will be merged if parameters as fulfilled and again take pull from main.

## License

This project is licensed under the [MIT License](LICENSE.txt).

---

This README provides an overview of the Sanitary Product Management System project's structure, configuration, database setup, and instructions for running the SQL script. For more detailed information on specific routes, controllers, and services, refer to the individual code files. If you have any questions or need assistance, please don't hesitate to reach out to the project maintainers.
