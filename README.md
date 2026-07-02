# Novera Developer Website

A modern, responsive, production-quality website for Novera built with HTML5, CSS3, and vanilla JavaScript.

## Project structure

- index.html — landing page with hero, about, statistics, featured apps, testimonials, FAQ, and call to action.
- apps.html — app catalog with search and category filters.
- privacy.html — privacy policy overview with expandable app sections.
- contact.html — contact page with client-side validation and contact details.
- css/style.css — core visual system, layout, and component styles.
- css/responsive.css — media queries for mobile, tablet, and desktop screens.
- css/animations.css — movement, reveal, floating, and transition effects.
- js/main.js — navigation, counters, FAQ, filtering, and form interactions.
- js/animations.js — scroll reveal, typing effect, and intersection observer logic.
- images/ — logo, placeholder app visuals, and background assets.

## How to edit app cards

Open [apps.html](apps.html) and update the app card blocks in the app catalog section. Each card contains:
- title
- category tags
- description
- version and updated date
- feature list
- action buttons

## How to replace images

Replace the files in the images folder with your own assets:
- logo.svg
- hero-placeholder.png
- app-placeholder.png
- background.svg

For best results, keep the same dimensions or adjust the CSS classes that reference them.

## How to add new apps

1. Duplicate an existing app card in [apps.html](apps.html).
2. Update the title, description, metadata, and categories.
3. Add the new category to the filter buttons if needed.
4. If you want it featured on the home page, duplicate the card block in [index.html](index.html).

## How to update the Privacy Policy

Edit the privacy sections in [privacy.html](privacy.html). Each app card contains placeholder text for:
- information collection
- permissions
- third-party services
- data sharing
- children’s privacy
- security
- changes
- contact information

Replace the placeholder paragraphs with your official policy language.

## Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository settings.
3. Go to Pages.
4. Choose the main branch and root folder.
5. Save and wait for deployment.

## Deploy with Firebase Hosting

1. Install Firebase CLI.
2. Run `firebase init hosting`.
3. Select the project folder.
4. Set the public directory to the project root.
5. Run `firebase deploy`.

## Deploy with Netlify

1. Create a Netlify site from the repository.
2. Set the publish directory to the project root.
3. Deploy the site.
4. Netlify will provide a live URL automatically.

## Future expansion ideas

The structure is ready for future additions such as:
- unlimited apps
- blog or news pages
- release notes
- dark mode
- language switcher
- search enhancements
- authentication
- admin dashboard
