This project is a POC to show debug problems of importing a widget with its assets

1. `git clone`

2. `cd fakeloader; npm install; npm run build; npm link;`

3. `cd nextjs-starter; npm install; npm link fakeloader; npm run dev;`

4. Visit browser at `http://localhost:3000`. You should see fakeloader's content in the main app, but missing its dependencies like stylesheets and logo.svg
