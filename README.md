# Ghost Hunter's Almanac
Map picker, map browser, and evidence browser for Phasmophobia.

## Local server use
To start, download the repo and open a terminal in the location of the downloaded repo. Next, run `npm install` to ensure you have the dependencies needed. After that, choose which of the below methods for using your own local copy.

### Temporary local hosting
The easiest way to use this site on your own machine would be using `npm start` from the directory you've downloaded the repo to. This will start a development mode server on your machine and allow you to use the page at http://localhost:3000.

### Building for hosting on a server
If you wish to host the page on your own server, there is one thing to do before building, and two ways of doing so:

1) Edit `package.json` and edit the `homepage` variable. This variable controls the URLs used to load in the generated webpage files.
2) Set the `PUBLIC_URL` environment variable in your terminal to override the `homepage` URL for this session.

Using either of these methods, the value should either be the URL where you'll be hosting your page, or "." to make the asset URLs be relative to the index page.

Next, run `npm run build` to build the site. The output files will be in the `build` folder. Finally, move the contents of `build/` to your server and configure it how needed.
