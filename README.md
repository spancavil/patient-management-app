# Patient management app

Responsive application for managing patients. Users can add and edit existing users in a non-persistent manner.

### Techs

-   NextJS
-   Tailwind CSS
-   Typescript
-   Context with reducer

### Run the project:

1. Create .env.example at root with the following variable:

```
NEXT_PUBLIC_BASE_API_USERS='https://63bedcf7f5cfc0949b634fc8.mockapi.io/users'
```

2. Generate and run the image with Docker:

```sh
docker build -t nextapp .
docker run --name nextapp -p 3000:3000 -d nextapp
```

OR

Install and run locally:

```sh
cd <root_folder>
npm install
npm run dev
```

3. Open `localhost:3000` from the browser
