# HeartRate Extractor

A TypeScript utility function that extracts numeric heart rate values from log strings. This project demonstrates regex pattern matching, type-safe parsing, and robust error handling in TypeScript.

## How It Works

The function uses a regular expression pattern to:

1. Match `HeartRate=<value>` patterns with flexible spacing
2. Extract the value portion
3. Parse numeric values using `parseInt()`
4. Filter out `NaN` results (invalid entries)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash

cd heartrate-extractor

# Initialize dependencies
npm i

```

## 🏃 Running the Project

### Development Mode (with ts-node)

```bash
npm run dev
```

### Build and Run

```bash
# Compile TypeScript to JavaScript
npm run build

# Run compiled JavaScript
npm start
```

## Author

Hamza - Full Stack Developer
