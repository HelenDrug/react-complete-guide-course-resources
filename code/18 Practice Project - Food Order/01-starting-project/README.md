# Food Order React Practice Project

This is a practice project for learning React, TypeScript, and modern frontend development workflows. The project simulates a food ordering application, allowing users to browse meals, add items to a cart, and place orders. It includes a simple backend for serving meal data and handling orders.

## Features

- **Browse Meals:** View a list of available meals with images, descriptions, and prices.
- **Add to Cart:** Select meals and add them to a shopping cart.
- **Cart Management:** View, update, and remove items from the cart.
- **Order Submission:** Submit orders to the backend and receive confirmation.
- **Modal UI:** Uses modal dialogs for cart and order interactions.
- **TypeScript:** Full type safety across the frontend codebase.
- **Custom Hooks & Context:** State management using React Context and custom hooks.
- **Testing:** Includes unit tests for utility functions using Vitest.

## Project Structure

- `src/` - Frontend React application
  - `components/` - UI components (Header, Modal, Cart, Meals, etc.)
  - `api/` - Data fetching hooks
    - `useGetMeals.ts` - Custom React hook to fetch available meals from the backend API. Handles loading, error, and data states for meal listings.
  - `store/` - React Context for cart and user progress
  - `util/` - Utility functions and tests
  - `assets/` - Static assets (images, etc.)
- `backend/` - Simple Node.js/Express backend
  - `data/` - JSON files for meals and orders
  - `public/images/` - Meal images

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the backend:**
   ```bash
   cd backend
   npm install
   node app.js
   ```
3. **Start the frontend:**
   ```bash
   cd ..
   npm run dev
   ```
4. **Run tests:**
   ```bash
   npm test
   ```

## Technologies Used
- React
- TypeScript
- Vite
- Vitest
- Node.js
- Express

## Notes
- The backend must be running for the frontend to fetch meal data and submit orders.
- Images for meals are stored in `backend/public/images/` and referenced by the frontend.
- Environment variables can be configured in `.env` files for API URLs and other settings.

## Backend API Endpoints

### `GET /meals`
Returns a list of available meals as JSON. Reads data from `data/available-meals.json`.
- **Response:** Array of meal objects with properties: `id`, `name`, `description`, `price`, `image`.
- **Rate limiting:** 100 requests per 15 minutes per IP.

### `POST /orders`
Receives a new order and saves it to `data/orders.json`.
- **Request body:**
  - `order`: Object containing `customer` info and `items` array.
    - `customer`: `{ name, email, street, postal-code, city }`
    - `items`: Array of cart items `{ id, name, price, quantity, ... }`
- **Response:**
  - `201 Created` on success, `{ message: 'Order created!' }`
  - `400 Bad Request` if required data is missing or invalid
- **Rate limiting:** 100 requests per 15 minutes per IP.

## License
This project is for educational purposes and is not intended for production use.
