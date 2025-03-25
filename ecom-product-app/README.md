# Baseball Products

This is a simple React application that displays a list of baseball products. The app allows users to filter products based on their category and view details such as the product's name, price, description, and image.

## Features

- Display a list of baseball products with their names, prices, descriptions, and images.
- Filter products based on their category.
- Custom styling using CSS.

## Components

### App Component

The main component that manages the state for the list of products and passes this data as props to child components.

### ProductList Component

Receives the list of products from the App component as a prop and maps through them to display each product.

### ProductItem Component

Represents a single product and displays the product's name, price, description, category, and image.

## Project Setup

1. Set up the React app:
   ```sh
   npx create-vite ecom-product-app --template react
   cd ecom-product-app
   npm install