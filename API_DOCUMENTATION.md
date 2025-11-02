# E-commerce MERN API Documentation

## Table of Contents
- [Authentication](#authentication)
- [Products](#products)
- [Categories](#categories)
- [Addresses](#addresses)
- [Orders](#orders)
- [Cart](#cart)
- [Wishlist](#wishlist)
- [Reviews](#reviews)

## Base URL
All endpoints are relative to the base URL: `http://localhost:5000` (for development)

## Authentication

### Register New User
```http
POST /auth/register
```

**Request Headers**
```json
{
  "Content-Type": "application/json"
}
```

**Request Body**
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "username": "johndoe",
  "phoneNumber": "+1234567890"
}
```

**Success Response (201 Created)**
```json
{
  "id": "user_id",
  "email": "user@example.com",
  "username": "johndoe",
  "phoneNumber": "+1234567890"
}
```

**Error Responses**
- `400 Bad Request`: Missing required fields
- `409 Conflict`: Email already exists
- `500 Internal Server Error`: Server error

### Login
```http
POST /auth/login
```

**Request Headers**
```json
{
  "Content-Type": "application/json"
}
```

**Request Body**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Success Response (200 OK)**
```json
{
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "username": "johndoe"
  }
}
```

### Logout
```http
POST /auth/logout
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}"
}
```

**Success Response (200 OK)**
```json
{
  "message": "Logged out successfully"
}
```

### Get Current User
```http
GET /auth/me
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}"
}
```

**Success Response (200 OK)**
```json
{
  "id": "user_id",
  "email": "user@example.com",
  "username": "johndoe"
}
```

## Products

### Get All Products
```http
GET /products
```

**Query Parameters**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search term
- `category` (optional): Category ID
- `price` (optional): Price filter

**Success Response (200 OK)**
```json
{
  "products": [
    {
      "id": "product_id",
      "title": "Product Name",
      "description": "Product Description",
      "price": 99.99,
      "image": "image_url",
      "category": "category_id"
    }
  ],
  "totalPages": 5,
  "currentPage": 1
}
```

### Get Product by ID
```http
GET /products/:id
```

**Success Response (200 OK)**
```json
{
  "id": "product_id",
  "title": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "image": "image_url",
  "category": "category_id"
}
```

### Create Product (Admin Only)
```http
POST /products
```

**Request Headers**
```json
{
  "Authorization": "Bearer {admin_token}",
  "Content-Type": "multipart/form-data"
}
```

**Request Body**
- `title`: Product title
- `description`: Product description
- `price`: Product price
- `image`: Product image file
- `category`: Category ID

**Success Response (201 Created)**
```json
{
  "id": "product_id",
  "title": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "image": "image_url",
  "category": "category_id"
}
```

## Categories

### Create Category
```http
POST /categories
```

**Request Headers**
```json
{
  "Content-Type": "application/json"
}
```

**Request Body**
```json
{
  "name": "Category Name",
  "description": "Category Description",
  "image": "image_url",
  "icon": "icon_name"
}
```

**Success Response (201 Created)**
```json
{
  "id": "category_id",
  "name": "Category Name",
  "description": "Category Description",
  "image": "image_url",
  "icon": "icon_name"
}
```

### Get All Categories
```http
GET /categories
```

**Success Response (200 OK)**
```json
[
  {
    "id": "category_id",
    "name": "Category Name",
    "description": "Category Description",
    "image": "image_url",
    "icon": "icon_name"
  }
]
```

## Addresses

### Add New Address
```http
POST /addresses
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}",
  "Content-Type": "application/json"
}
```

**Request Body**
```json
{
  "street": "123 Main St",
  "city": "City Name",
  "state": "State Name",
  "country": "Country Name",
  "zipCode": "12345"
}
```

**Success Response (201 Created)**
```json
{
  "message": "Address added successfully",
  "address": {
    "id": "address_id",
    "street": "123 Main St",
    "city": "City Name",
    "state": "State Name",
    "country": "Country Name",
    "zipCode": "12345"
  }
}
```

### Get User Addresses
```http
GET /addresses
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}"
}
```

**Success Response (200 OK)**
```json
[
  {
    "id": "address_id",
    "street": "123 Main St",
    "city": "City Name",
    "state": "State Name",
    "country": "Country Name",
    "zipCode": "12345"
  }
]
```

## Cart

### Add to Cart
```http
POST /carts
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}",
  "Content-Type": "application/json"
}
```

**Request Body**
```json
{
  "productId": "product_id",
  "quantity": 1
}
```

### Get Cart
```http
GET /carts
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}"
}
```

## Orders

### Create Order
```http
POST /orders
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}",
  "Content-Type": "application/json"
}
```

### Get User Orders
```http
GET /orders
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}"
}
```

## Wishlist

### Add to Wishlist
```http
POST /wishlist
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}",
  "Content-Type": "application/json"
}
```

**Request Body**
```json
{
  "productId": "product_id"
}
```

### Get Wishlist
```http
GET /wishlist
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}"
}
```

## Reviews

### Add Review
```http
POST /reviews
```

**Request Headers**
```json
{
  "Authorization": "Bearer {token}",
  "Content-Type": "application/json"
}
```

**Request Body**
```json
{
  "productId": "product_id",
  "rating": 5,
  "comment": "Great product!"
}
```

### Get Product Reviews
```http
GET /reviews/:productId
```

## Payment Integration

### Stripe Webhook
```http
POST /webhook
```

**Request Headers**
```json
{
  "Content-Type": "application/json",
  "Stripe-Signature": "webhook_signature"
}
```

## Error Responses

All endpoints may return the following error responses:

- `400 Bad Request`: Invalid input or missing required fields
- `401 Unauthorized`: Missing or invalid authentication token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Requested resource not found
- `409 Conflict`: Resource already exists
- `500 Internal Server Error`: Server error

## Authentication
All protected endpoints require a valid JWT token in the Authorization header:
```http
Authorization: Bearer {your_jwt_token}
```

## Rate Limiting
The API implements rate limiting to prevent abuse. Excessive requests will return a 429 Too Many Requests response.

## Data Formats
- All requests with a body should be sent as JSON unless specified otherwise (like file uploads)
- Dates are returned in ISO 8601 format
- IDs are returned as MongoDB ObjectId strings