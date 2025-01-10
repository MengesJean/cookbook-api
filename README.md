# Cookbook Backend

A NestJS-based backend service for managing cookbook recipes and related content.

## Features

- Book management with image upload support
- File handling with automatic cleanup
- RESTful API endpoints
- TypeORM integration for database management

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database

## Installation

```bash
# Clone the repository
git clone <your-repository-url>

# Install dependencies
npm install
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=cookbook

# Application Configuration
PORT=3000
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

## API Endpoints

### Books

- `POST /books` - Create a new book (with image upload)
- `GET /books` - Get all books
- `GET /books/:id` - Get a specific book
- `PATCH /books/:id` - Update a book (with optional image upload)
- `DELETE /books/:id` - Delete a book

### File Upload

The API supports image uploads for books with the following specifications:

- Supported formats: JPEG, PNG, JPG
- Files are stored in `./uploads/books`
- Old images are automatically deleted when updating

## Project Structure

```
src/
├── books/
│   ├── dto/
│   │   ├── create-book.dto.ts
│   │   └── update-book.dto.ts
│   ├── entities/
│   │   └── book.entity.ts
│   ├── books.controller.ts
│   ├── books.service.ts
│   └── books.module.ts
├── app.module.ts
└── main.ts
```

## Development

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Database Migrations

```bash
# Generate a migration
npm run typeorm:generate-migration

# Run migrations
npm run typeorm:run-migrations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
