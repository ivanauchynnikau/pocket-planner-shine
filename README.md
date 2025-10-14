# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cb4003c8-a7e5-4226-8c77-43adf86a3356

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cb4003c8-a7e5-4226-8c77-43adf86a3356) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/cb4003c8-a7e5-4226-8c77-43adf86a3356) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## How can I deploy this project to external hosting?

This project can be deployed to any static hosting service. Here are instructions for popular platforms:

### Vercel

1. Push your code to GitHub (if not already connected)
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Netlify

1. Push your code to GitHub (if not already connected)
2. Visit [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add to vite.config.ts:
   ```typescript
   base: '/your-repo-name/'
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repository settings → Pages → Source: gh-pages branch

### Other Platforms

The project can also be deployed to:
- **Cloudflare Pages**: Connect GitHub repo, set build command to `npm run build` and output to `dist`
- **Railway**: Connect GitHub repo and it will auto-detect settings
- **Render**: Create Static Site, connect repo, build command `npm run build`, publish directory `dist`

All these platforms offer free tiers suitable for small to medium projects.
