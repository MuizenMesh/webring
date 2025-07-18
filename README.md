# MuizenMesh Webring

A community webring connecting sites from MuizenMesh Communities, including Muizenberg, Capricorn, and Vrygrond.

Built using [Max Boeck's 11vnty Webring Project](https://github.com/maxboeck/webring) and inspired by posts from [Tatiana Mac](https://twitter.com/TatianaTMac/status/1114388079630929926) and [Charlie Owen](https://www.sonniesedge.net/posts/webrings).

Uses [Eleventy](https://www.11ty.io) and [Netlify](https://www.netlify.com/) to build a central directory for member sites. Members can link to `/prev`, `/random` and `/next` to navigate between sites in the ring.

✏️ See Max's Explanatory [Blog Post](https://mxb.dev/blog/webring-kit/)

## Features

* Community-managed webring hosted on GitHub
* Member sites defined in `src/data/members.json`
* Join the ring by submitting a pull request or using our email form
* Community code of conduct
* **Multiple embed options:**
  - HTML embed with CSS themes (Ocean, Sunset, Dark, Minimal)
  - React/TypeScript widget with 5 themes and 3 sizes
* RSS feed index of all member sites
* Interactive SVG map showing ring members
* Live demos for both HTML/CSS and React implementations

## Visit the Webring

Visit the __[MuizenMesh Webring](https://meshring.netlify.app/)__ to explore our community sites.

## Join the Ring

Want to add your site to the MuizenMesh Webring? Here's how:

1. Your site should be related to the MuizenMesh Communities (Muizenberg, Capricorn, Vrygrond)
2. **[Create a Pull Request](https://github.com/MuizenMesh/webring/compare)** - Our PR template will guide you through adding your site to `src/data/members.json`
3. Or use our submission form on the [webring website](https://meshring.netlify.app/)
4. Follow our [community code of conduct](src/code-of-conduct.md)

### Quick PR Guide
1. Fork this repository
2. Edit `src/data/members.json` to add your site details
3. Create a pull request using our template
4. We'll review and merge your submission!

## Banner Embed

As a member, you can add a webring banner to your site to help visitors discover other community sites.

### HTML Embed (Recommended)

Copy this code snippet and embed it into your site:

```html
<webring-banner>
    <p>Member of <a href="https://meshring.netlify.app/">MuizenMesh Webring</a></p>
    <a href="https://meshring.netlify.app/prev">Previous</a>
    <a href="https://meshring.netlify.app/random">Random</a>
    <a href="https://meshring.netlify.app/next">Next</a>
</webring-banner>
<script async src="https://meshring.netlify.app/embed.js" charset="utf-8"></script>
```

The banner renders as a web component with fallback links for better accessibility.

#### CSS Themes for HTML Embed

Style your webring banner with our CSS themes - no React or build tools required:

```html
<!-- Add a theme CSS file -->
<link rel="stylesheet" href="webring-theme-ocean.css">

<!-- Add theme class to your banner -->
<webring-banner class="theme-ocean">
    <!-- webring content -->
</webring-banner>
```

**Available themes:** Ocean, Sunset, Dark, Minimal  
**Demo:** [HTML/CSS Themes Demo](https://meshring.netlify.app/html-css-demo/)  
**Files:** [html-demo/themes/](html-demo/themes/)

### React/TypeScript Widget

For JavaScript projects using React, we provide a ready-to-use component in the [`widgets/`](widgets/) folder:

```tsx
import WebringWidget from './path/to/WebringWidget';

<WebringWidget 
  title="Community Links"
  theme="ocean"
  size="medium"
  webringUrl="https://meshring.netlify.app"
/>
```

Features:
- **5 Built-in Themes**: Default, Minimal, Ocean, Sunset, Dark
- **3 Size Variants**: Small, Medium, Large
- **TypeScript Support**: Full type definitions
- **Responsive Design**: Mobile and desktop friendly
- **Customizable**: Show/hide elements, custom styling
- **CSS Modules**: Scoped styling with theme variables

Available themes: `default`, `minimal`, `ocean`, `sunset`, `dark`

See the [widget documentation](widgets/README.md) for installation, theming, and usage details.

## Local Development

To contribute to the webring or run it locally:

```shell
# clone this repository
git clone https://github.com/MuizenMesh/webring.git

# go to the working directory
cd webring

# install dependencies
yarn

# start a local development server
yarn start
```

## Support the Project

You can [support the webring admins](https://www.buymeacoffee.com/ubuntupunk) to help keep the community running.

