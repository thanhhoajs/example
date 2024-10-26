<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1_M5tYoaKfXpqsOAPQl3WVWs9u5NWrG76" alt="ThanhHoa Logo" width="300"/>
</p>

# ThanhHoa

**ThanhHoa** is a lightweight, high-performance framework built on **Bun** for creating scalable server applications. It offers built-in utilities for routing, middleware, validation, security, and Swagger documentation, providing a streamlined approach to building modern RESTful APIs.

## Installation

Install the framework and dependencies:

```bash
bun install
```

## Project Structure

```plaintext
src/
│
├── common/
│   ├── swagger/
│   │   ├── swagger-options.ts
│   │   └── swagger-spec.ts
│   └── middlewares/
│       └── guard.middleware.ts
├── configs/
│   ├── app.config.ts
│   ├── database.config.ts
│   ├── validator.config.ts
│   └── index.ts
├── database/
│   ├── schemas/
│   │   ├── sessions.schema.ts
│   │   └── users.schema.ts
│   ├── seeds/
│   │   └── any.seed.ts
│   ├── migrations/
│   │   └── any.sql
│   └── db.ts
├── modules/
│   ├── auth/
│   │   ├── dto/
│   │   │   └── user.create.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── user/
│   │   ├── user.module.ts
│   │   ├── user.service.ts
│   │   └── user.entity.ts
│   └── app.module.ts
└── main.ts
```

### 1. **Modules**

Each module represents a specific functionality, like **auth** or **user management**. Modules help organize routes, controllers, and services.

### 2. **Controllers**

Controllers manage routes, validate input, and interact with services. They often include Swagger annotations to facilitate API documentation.

### 3. **Services**

Services handle business logic and interact with models or external resources, such as the database.

### 4. **Models & Repositories**

Using `drizzle-orm`, models and repositories manage database interactions.

### 5. **Configuration**

Configuration files ensure the app operates correctly in different environments.

### 6. **Middleware**

ThanhHoa includes built-in middleware for CORS, Helmet, and other security-related functionalities.

### 7. **Swagger Documentation**

Swagger automatically generates API documentation for easy reference.

## Running the Application

To start the development server, create a `.env` file based on `.env.example`, then run:

```bash
bun db:generate
bun db:migrate
bun dev
```

By default, the API will be available at `http://localhost:3000`. Access Swagger documentation at `http://localhost:3000/api/docs`.

## Author

Nguyen Nhu Khanh <kwalker.nnk@gmail.com>
