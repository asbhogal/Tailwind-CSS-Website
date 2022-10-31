<div align="center">

<h1>Manage Landing Page - Frontend Mentor Challenge Project</h1>

![](https://api.checklyhq.com/v1/badges/checks/e5efa42b-1b7b-4cac-b6b9-3c0226dbd0c1?style=for-the-badge&theme=dark) ![](https://api.checklyhq.com/v1/badges/checks/e5efa42b-1b7b-4cac-b6b9-3c0226dbd0c1?style=for-the-badge&theme=dark&responseTime=true)<br><br>![GitHub deployments](https://img.shields.io/github/deployments/asbhogal/Tailwind-CSS-Website/production?label=DEPLOYMENT%20STATE&style=for-the-badge&labelColor=000) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/asbhogal/Tailwind-CSS-Website?style=for-the-badge&labelColor=000) ![GitHub repo size](https://img.shields.io/github/repo-size/asbhogal/Tailwind-CSS-Website?color=blueviolet&style=for-the-badge&labelColor=000)

</div>

A responsive website built using the Tailwind CSS Framework and HTML5 for a fictional company as part of the 'Manage landing page' challenge by Frontend Mentor and demonstrated by Traversy Media.

<strong>:heavy_check_mark: Features</strong><br>
  - Interface with as close resemblance to the mockup
  - Form validation using JS Regex
  - Responsive testimonial slider*
  - Accessible elements
  - Full responsiveness
  - Optimised for the web

*PLEASE SEE NOTES BELOW

<strong>:nerd_face: Stacks Used</strong><br>
<br>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg"><img src="https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg" alt="html5" width="50" height="50" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg"><img src="https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg" alt="css3" width="50" height="50" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg"><img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss" width="50" height="50" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg"><img src="https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50" style="max-width:100%;"></a>

<strong>:link: Links</strong>
<br>
 - <a target="_blank" rel="noopener noreferrer" href="https://tailwind-css-website-rho.vercel.app/">Manage Landing Page</a>
 - <a target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5">Frontend Mentor Challenge</a>
 - <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dFgzHOX84xQ">Tailwind Crash Course - Traversy Media</a>

 <strong>:fountain_pen: Notes</strong>

 ##### RESPONSIVENESS #####

 The designs of this site have remained faithful to the breakpoints used in the mockups for mobile and laptop (375px and 1440px respectively.) To adjust these on a global scale, you can either amend the breakpoints in the <code>tailwind.config.js</code> file (the most convenient option with classes remaining intact) or adjust the inline-classes accordingly on a specific, case-by-case basis.

 The slider uses the breakpoints provided in the src files of the project to choose the number of testimonial cards to display at any one time. These can easily be adjusted in the <code>/src/js/testimonial-slider.js</code> file.

 ##### FRONT END DELIVERY #####

 This repo has been deployed client site using Vercel. As such, Vercel handles the server-side optimisations, security and performance metrics, incl. caching, WebP delivery, headers and compression (Gzip and Brotli). Adjustments to these, and others, can be made by creating a <code>vercel.json</code> file. See Vercel's documentation for further details. The repo owner has also left the WebP versions of the images in the <code>/src</code> dist should you require them for client-side builds.

 ##### FORK/CLONING PERMISSIONS #####

 Forking/cloning this repo to work on yourself is welcomed. Before doing so however, the repo owner strongly advises reading the following:
  - Please keep the author in the <code>package.json</code> unchanged unless you are creating it entirely from scratch. If not, you are welcome to add your details as a contributor.
  - Please keep the build screenshots in the main directory unchanged (incl. file names and repo username) unless you are changing it and subsequently the screenshots will be different (Frontend Mentor encourage different approaches and thus differentiations. By attempting it yourself, you will have a different approach where the end result will differ and should therefore be compared.)

 As well as this, please read below.

 ##### PRODUCTION BUILD & DEPLOYMENT #####

 While the app has the Tailwind CSS CDN integrated for browser-side deployment, it is highly recommended to run this locally and install Tailwind via npm as follows:
  - Clone the repo to your local computer
  - In the project directory, run <code>npm install -D tailwindcss</code> via your chosen CLI
  - Run <code>npm run watch-css</code> to begin the live watch (using existing config)

  N.B. This assumes you keep the structure incl. <code>/public</code> and <code>/src</code> dirs and <code>tailwind.config.js</code> file exactly as seen in the repo files. If you wish to change this, you will either need to change the source and output dirs and config file as necessary or generate a new one via <code>npx tailwindcss init</code> and adjust it accordingly. For any other information regarding Tailwind installation and configuration please visit the <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/docs/installation">Official Documentation</a>.

 ##### SOURCE ASSETS #####

 All assets used deemed relevant for this project to be used client-side and cloned to a local computer have been added in their respective directories. Below are a list of key source files which, if modified for any customisations, will need to be amended respectively. This list is not meant to be exhaustive and may be updated at any one time.

  - The <code>Fonts</code> are locally hosted and can be found in the <code>src</code> directory under <code>/fonts</code> Any changes to these will subsequently need to be made in the <code>input.css</code> stylesheet in order for Tailwind to compile it correctly to the <code>output.css</code>
  - The 'attribution' section in the <code>footer</code> will need to be altered to reflect the new owner (being yourself) for any changes that have been made. This would include both the name and the link appended to it (which currently points to this repo)
  - Deployment for a cloned/forked repo to a third-party hosting will subsequently need the <code>link</code> present in the <code>Links</code> changed respectively to reflect the different repo created
 ##### PULL REQUESTS #####

 While the repo owner is open to new/alternative approaches to the code leveraged in this repo, please kindly note he is only considering PRs pertaining to the following:
 - Improved functionality, 
 - Improvements to accessibility
 - Improvements to stability
   
PRs therefore pertaining to design or aesthetics will not be considered at this time. If you would like to discuss these separately, the repo owner will happily do so. You may contact him either via <a href="mailto:amansinghbhogal1@gmail.com">email</a> or via <a href="www.linkedin.com/in/amansinghbhogal">LinkedIn.</a>