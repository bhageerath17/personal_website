# Personal Website

This repository contains a simple personal website built with React using CDN scripts. The design draws inspiration from Apple's minimalist aesthetic.

## Local Development

Open `src/index.html` in your browser. The page loads React from a CDN so no build step is required.

If you make changes to the JavaScript or CSS files, just refresh the page to see the updates.

## Directory Structure

```
src/
  index.html  - entry point loading React and your app
  style.css   - styling inspired by Apple design
  app.js      - React components defining site sections
```

## Deploying to Google Cloud

You can deploy this static site using **Google Cloud Storage**.

1. **Create a bucket** in the [Google Cloud Console](https://console.cloud.google.com/) and enable the "Static website hosting" option.
2. Upload the contents of the `src` directory (`index.html`, `style.css`, `app.js`) to the bucket.
3. Set the bucket's permissions to allow public access to `index.html`.
4. Note the bucket's public URL and share it as your website link.

For more advanced hosting (e.g., using a custom domain or HTTPS), see the [Google Cloud documentation](https://cloud.google.com/storage/docs/hosting-static-website).

## Personalization

Replace the placeholder text in `app.js` with information from your resume. Each `Section` component corresponds to a section of your website: education, employment, and other interests.

---

This project is intentionally lightweight for easy deployment and customization.
