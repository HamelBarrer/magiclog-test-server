# Migiclog Test

This is the proposal for the Magiclog test solution, using technologies:

- Node
- Express
- TypeScript
- Prisma
- PostgresSql

### Project configuration

In order to run the project it is necessary to use the environment variables that define the connections to PostgreSql:

```sh
DATABASE_URL = "postgres://default:0eaxVIU6ntOv@ep-ancient-grass-a4keu7u1.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
SECRET_KEY = "mio"
```

Once the environment variables are configured, the packages are required to be installed:

```sh
npm i  # npm
```

```sh
pnpm i  # pnpm
```

With the packages installed, all that remains is to run the project:

```sh
npm run dev  # npm
```

```sh
pnpm dev  # pnpm
```
