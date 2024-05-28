# Craftex

A portfolio showcase application built with the T3 stack, using Next.js and Prisma.

## Features

- Curated portfolio displays
- Next.js for SSR and SSG
- Prisma for database interactions
- Tailwind CSS for styling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL (or any Prisma-supported database)

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/craftex.git
   cd craftex
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

   # or

   yarn install
   \`\`\`

3. Set up environment variables:
   Create a \`.env\` file with your database URL:
   \`\`\`env
   DATABASE_URL="postgresql://user:password@localhost:5432/your-database-name"
   \`\`\`

4. Migrate the database and generate Prisma client:
   \`\`\`bash
   npx prisma migrate dev --name init
   npx prisma generate
   \`\`\`

## Usage

Start the development server:
\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`
The app will be running at [http://localhost:3000](http://localhost:3000).

## Deployment

1. Build the application:
   \`\`\`bash
   npm run build

   # or

   yarn build
   \`\`\`

2. Start the production server:
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`
