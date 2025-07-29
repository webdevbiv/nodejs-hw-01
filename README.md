# 📁 goit-node-js

A Node.js-based contacts manager app for practicing file operations and modular code architecture.

## 📦 Project Structure

```
src/
├── constants/         # Shared constants like PATH_DB
├── db/                # JSON file database (db.json)
├── scripts/           # CLI scripts (generate, add, count, etc.)
├── utils/             # Reusable logic (read/write/create contacts)
```

## 📄 Features

- Create fake contacts using `@faker-js/faker`
- Store data in a JSON file
- Read, write, and count contacts
- Run scripts via CLI

## 🚀 Usage

### 1. Install dependencies

```bash
npm install
```

### 2. Run scripts

```bash
npm run generate      # Add 5 fake contacts
npm run get-all       # Show all contacts
npm run add-one       # Add a single contact
npm run count         # Count total contacts
npm run remove-last   # Remove last contact
npm run remove-all    # Clear all contacts
```

> You can edit `src/scripts/generateContacts.js` to generate a different number.

## 🛠 Tech Stack

- Node.js (ESM)
- `fs/promises`
- `@faker-js/faker`
- ESLint

## 📁 Database Format

Example of a contact in `db.json`:

```json
{
  "id": "c8b203b4-293e-4f25-9d44-bc6e14c298a4",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-123-4567"
}
```

---

© 2025 – Built for GoIT Node.js Practice HW-01
