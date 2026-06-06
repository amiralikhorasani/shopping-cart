<<<<<<< HEAD
# Shopping Cart

A small React shopping cart application built to practice modern state management with Redux Toolkit. The app lets users add products, update item quantities, remove products from the cart, and see the cart total update instantly.

## Features

- Add a new product with a name and price
- Increase or decrease product quantity
- Prevent quantity from going below `1`
- Remove products from the cart
- Automatically recalculate the total cart price
- Component-scoped styling with CSS Modules
- Centralized cart state using Redux Toolkit

## Tech Stack

- React
- Redux Toolkit
- React Redux
- CSS Modules
- Create React App
- json-server for optional mock data

## Project Structure

```text
shopping-cart/
|-- data/
|   `-- carts.json
|-- public/
|-- src/
|   |-- components/
|   |   |-- AddProduct.js
|   |   |-- Box.js
|   |   |-- Header.js
|   |   |-- Product.js
|   |   |-- Products.js
|   |   |-- Quantity.js
|   |   |-- RemoveBtn.js
|   |   |-- Total.js
|   |   `-- styles/
|   |-- redux/
|   |   |-- shoppingSlice.js
|   |   `-- store.js
|   |-- App.js
|   |-- app.css
|   |-- index.css
|   `-- index.js
|-- package.json
`-- README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

```bash
npm install
```

### Run the App

```bash
npm start
```

The app will run in development mode at:

```text
http://localhost:3000
```

### Optional Mock Server

The project includes a small mock data file at `data/carts.json`. You can run it with:

```bash
npm run server
```

The json-server instance runs on:

```text
http://localhost:9000
```

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm run build`

Builds the app for production into the `build` folder.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run server`

Starts json-server and watches `data/carts.json` on port `9000`.

## State Management

Cart state is handled in `src/redux/shoppingSlice.js`.

The slice stores:

- `carts`: the list of products in the cart
- `total`: the calculated total price of all cart items

Main reducers:

- `add`: adds a product to the cart
- `remove`: removes a product by id
- `incQuantity`: increases the selected product quantity
- `decQuantity`: decreases the selected product quantity

The total price is recalculated after each cart update.

## What I Practiced

- Creating and configuring a Redux store
- Building reducers with Redux Toolkit
- Dispatching actions from React components
- Reading global state with `useSelector`
- Styling React components with CSS Modules
- Splitting UI into reusable components

## License

No license has been specified yet.
=======
# shopping-cart
>>>>>>> 60bfd1ab07950f142344748433e12b80e8af80d5
