<p align="center">
    <img alt="Gatsby" src="https://repository-images.githubusercontent.com/307823747/e1d6d200-198c-11eb-8e33-ff253d9a01ca" width="75%" align="center" />
</p>
<h1 align="center">
  gatsby-starter-personal-portfolio
</h1>

Kick off your personal site with this minimalist resume style broilerplate. This starter features user-friendly components and mobile responsive design. See it live in this [demo](https://gatsby-starter-personal-portfolio.vercel.app). 


## 👨‍💻 Why this starter?

This template is perfect for individuals who would like to share their professional credentials in an organized website.

### Blazing fast
You might have heard this term about GatsbyJS projects before. However, I am not exagerrating. Check out the [Lighthouse scores](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fgatsby-starter-personal-portfolio.vercel.app%2F)! It's soooo... green.

### Device independent
Access the website through a laptop, tablet or phone with no problem. This site has been thoroughly tested to make sure that it can be viewed no matter the screen size.

### Engaging layout
This starter template offers a change in format in how you relay information _about you_ to the readers. You can say goodbye to boring blocks of endless text, while still getting the benefits of organized content.

### Show off your skills and projects
Separate sections are dedicated to your skills and projects, giving the spotlight to each and every one of them. No, you don't need to copy and paste blocks of HTML code for each additional skill you have. You can enumerate them in JSON files, and the rest gets taken care of.

### Colors and dark mode
A dark mode toggle is available no matter where your user is on the site. Not quite satisfied with the color palette? Color schemes for both light and dark modes are customizable according to your preference.

## 🚀 Quick start

1.  **Get a copy on your machine**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the gatsby-starter-personal-portfolio starter
    gatsby new my-site https://github.com/gmlunesa/gatsby-starter-personal-portfolio/
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-site
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## ✏️ Modifying the site

To make it easier for you, this starter is sliced into multiple components or sections for effortless management. Let's discuss them one by one. 

### Components and Pages

<details><summary>Components</summary>

#### layout.js
└── 📁 src/components/layout.js

Handles the common components that will be seen in all the pages of the site. Included in the layout.js are the following subcomponents:
* header.js
* footer.js

#### hero.js
└── 📁 src/components/landing/hero.js

Handles the hero section of the landing page.

#### content.js
└── 📁 src/components/landing/content.js

Handles the resume section of the landing page.

#### image.js
└── 📁 src/components/image.js

Handles the GraphQL queries for images.

#### seo.js
└── 📁 src/components/seo.js

Handles the SEO optimization.

#### links.js
└── 📁 src/components/links.js

Handles the social media links seen throughout the site.
</details>

<details><summary>Pages</summary>
    
#### index.js
└── 📁 src/pages/index.js

Handles the landing page of the site. Contains the following components:
* layout.js
* hero.js
* content.js

#### about.js
└── 📁 src/pages/about.js

Handles the About page; will be located at `your_site_url.com/about`

#### contact.js
└── 📁 src/pages/contact.js

Handles the Contact page; will be located at `your_site_url.com/contact`

#### 404.js
└── 📁 src/pages/404.js

Handles the custom 404 page if the user strays from the right path
</details>

### Constants

You can find and replace the following constants for quick adjustments. This is completely optional and you can replace these placeholders manually.

Find | Replace it with | Effect
--- | --- | ---
siteName | Name of your site | Site title, navbar title, footer title
emailName | Your Google mail | Link of the email icons
githubName | Your Github username | Link of the Github icons
linkedinName | Your LinkedIn username | Link of the LinkedIn icons
twitterName | Your Twitter username | Link of the Twitter icons

### Languages
You can access the `src\data\languages.json` to list the languages or skills that you have. It is automatically processed and displayed by the site.

### Projects
You can add your projects the `src\data\projects.json` to show the projects that you have. It is automatically processed and displayed by the site. Please make sure that you fill all the fields as indicated below:
```json
"project": "Project Sample #1",
"language": "Python",
"description": "A short description about the project.",
"link": "https://github.com/"
```

### Icons

This site uses Font Awesome icons. Should you want to add more icons, please refer to their [website](https://fontawesome.com/) for information about the icons.

## 🙏 Credits

This project is built on top of [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world). SVG assets were downloaded from [Undraw.co](https://undraw.co).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gmlunesa/gatsby-starter-personal-portfolio)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gmlunesa/gatsby-starter-personal-portfolio)

## 👍 Feedback

Feedback welcome! Please contact me through my email gmlunesa[at]gmail[dot]com, or visit my [website](https://gmlunesa.com).

![Website](https://img.shields.io/website?down_color=blue&down_message=offline&up_color=brightgreen&up_message=online&style=flat-square&url=https%3A%2F%2Fgatsby-starter-personal-portfolio.vercel.app)
