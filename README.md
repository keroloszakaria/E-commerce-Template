# E-commerce Template

The purpose of this repository is to save the template to be easy to sell and modify in the future.

## What’s inside the repository?

- `server/` — basic Django (3.0) project.
- `client/` — basic Vue CLI app generated by Vue CLI (4.3).

It’s a **minimal** working demo that you can easily run and play around with, **NOT** a starter project or boilerplate.

Additionally, there are VS Code tasks for running dev servers under `.vscode/`. If you don’t use VS Code, you don’t need this directory.

## Running

1. Clone the repo and `cd` into the directory.
2. Install Django: `pip install django`
3. Install Vue.js project dependencies: `cd client && npm install`
4. Now you can:
   - run the Vue.js dev server: `npm run serve`
   - build for production: `npm run build`
5. `cd` to the `server/` directory and run Django dev server from it: `python manage.py runserver`
6. Open `http://127.0.0.1:8000/` in your browser.