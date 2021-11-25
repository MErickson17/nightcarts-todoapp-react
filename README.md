# NEXT.js Firebase

> A todo app created using the Next.js framework
> 
> Following the class example in DMIT2008

### Install the following moudles
 ```npm
    npm install react-firebase-hooks react-icons
    npm install -D babel-plugin-styled-components
 ```


### Package.json File
your package.json file should contain the following moudles. It is fine to have different minor versions.
If you have a different major version the first number in the version update your package using ```npm update package@version-number``` 
 ```json
  "dependencies": {
    "firebase": "^9.5.0",
    "next": "^12.0.4",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-firebase-hooks": "^4.0.1",
    "react-icons": "^4.3.1",
    "styled-components": "^5.3.3"
  },
  "devDependencies": {
    "@svgr/cli": "^5.5.0",
    "babel-plugin-styled-components": "^1.13.3",
    "sass": "^1.43.4"
  }

 ```

## Notes
- This is the react icon library: [here](https://react-icons.github.io/react-icons/)
  - all these svg are already built as react icons
  - gives access to all the major icon libraries
- SVGR takes svgs and converts them into react components [here](https://react-svgr.com/docs/cli/)
- SVGO is a tool that optimizes svgs. There is an online tool and an npm package.
- Robin Wieruch has a great blog that includes a ton of react information [here](https://www.robinwieruch.de/)