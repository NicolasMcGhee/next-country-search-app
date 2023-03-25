# Overview
This is a Next.js Project that uses the [Rest Countries API](https://restcountries.com/) and allows you to search for specific countries and regions for details.
## Libraries Used
* Next.js
* Tailwind

## Designs Provided By [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
* [Desktop Preview](https://user-images.githubusercontent.com/32345511/227697424-41783e41-2473-41ba-8303-75eecf76b0d2.jpg)
* [Desktop Design Detail](https://user-images.githubusercontent.com/32345511/227697472-bde3ca3f-3325-4b1f-b80e-e28e2b092c58.jpg)
* [Mobile Design Dark](https://user-images.githubusercontent.com/32345511/227697521-e23f2d58-51e0-4656-aa18-cad2ff1817ca.jpg)



# How I Worked on this project
My goal was to create an API connected App that acheieved 3 main things:
* Allowed for routing, so when clicking on a specific country, you will get the correct data returned.
* Using state, a working search bar that returns and filters countries out as you search, along with a dropdown menu for region-based searching/filtering.
* Finally, A light/dark mode for style and fully responsive.

# How to navigate this project

  * The state and general logic for the site: [Example Code](https://github.com/NicolasMcGhee/next-country-search-app/blob/main/src/pages/index.js)
  * The Application fetched data from the restcountries API: [The Home Page](https://github.com/NicolasMcGhee/next-country-search-app/blob/main/components/Countries.js) and the [Details Page](https://github.com/NicolasMcGhee/next-country-search-app/blob/main/src/pages/country/%5Bid%5D/index.js)
  * The logic for the search bar [Example Code](https://github.com/NicolasMcGhee/next-country-search-app/blob/main/components/Search.js)

# Why I built this project this way

* I went with Next.js because it is the most popular React library and having experience with it can only help me, and after using it, I can easily see it being my go-to for my personal project. With its intergated routing and CSS modules making both easy and seamless, I've grown to enjoy it and learning more will be exciting.
* Tailwind to see how more streamlined it can make CSS and it excelled. I would use it more, but after the experience, I can say it's only made my basee CSS skills even greater. Thanks Tailwind, the wind beneath my wings.
* My End goal is to become a Back-End developer eventually, but starting with front-end will give me a complete picture of the process and will only improve me. I also enjoy working with APIs and data-fetching in general.

# If I had more time
* I would add an API that tracked the current time and display it on the homepage for each country.
* Continue to refactor the code, namely Tailwind, for shorter classnames.
* Probably just general minor design additions.
