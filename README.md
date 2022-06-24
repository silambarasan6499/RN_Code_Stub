# RN_Code_Stub

# Prerequisites

- [Node.js > 12](https://nodejs.org/en/) and npm 
- [Watchman](https://facebook.github.io/watchman/)
- [Xcode 12](https://developer.apple.com/xcode/)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)


# Base dependencies

- ["@react-native-async-storage/async-storage"](https://www.npmjs.com/package/@react-native-async-storage/async-storage) Stores the key value of System
- ["@react-native-community/netinfo"](https://www.npmjs.com/package/@react-native-community/netinfo)  information about online/offline status
- ["@react-navigation/bottom-tabs"](https://www.npmjs.com/package/@react-navigation/bottom-tabs)  switch between different routes
- ["@react-navigation/native"](https://www.npmjs.com/package/@react-navigation/native) React Native integration for React Navigation
- ["@react-navigation/stack"](https://www.npmjs.com/package/react-navigation-stack) transition between screens
- ["axios"](https://www.npmjs.com/package/axios) for networking
- ["moment"](https://www.npmjs.com/package/moment) validating, manipulating, and formatting dates
- ["react"](https://www.npmjs.com/package/react) functionality to React Component
- ["react-native"](https://www.npmjs.com/package/react-native) navigation library
- ["react-native-calendars"](https://www.npmjs.com/package/react-native-calendars)  customizable Calendars
- ["react-native-modal"](https://www.npmjs.com/package/react-native-modal) animations and styles customization
- ["react-redux"](https://www.npmjs.com/package/react-redux) React components read data from a Redux store, and dispatch actions to the store to update state.
- ["redux"](https://www.npmjs.com/package/redux) for state management.
- ["redux-thunk"](https://www.npmjs.com/package/redux-thunk) to dispatch asynchronous actions.

## Usage

### Use Template button
  Creating a repository from a template has the following advantages:

  - A repository created from a template starts with a single commit.
  - Commits to a repository created from a template do appear in your contribution graph.
  - Creating a repository from a template starts a new project quickly.

### 1: Using React-Native-Rename
  You can start by cloning from the repository. In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

  Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

  After that you should proceed as with any javascript project:
  - Go to your project's root folder and run `npm install`.
  - Run `npm run ios` or `npm run android` to start your application!

# Folder Structure
 - `index.js` : index. js typically handles your app startup, routing and other functions of your application and does require other modules to add functionality. It is the starting point for React Native applications, and it is always required. It can be a small file that requires other files that are part of your React Native component or application, 
 - `src` : This folder is the main container of all the code inside the application.
   - `App.js` : App.js is the initial screen that runs after the index.js file. Main Component that starts the whole Application. As you can see, it is just a regular React component. The only difference is that you are using predefined components from “react-native.” We will start by creating a folder to hold our components.
   - `Assets` : Asset folder to store all images. In Image folder We can add all the images in image folder, then we can import the image from assets
   - `Components` : Folder to store any common component that used in the App
   - `Config` : Folder to store the common config file that used in the App
   - `Container` : Folder that contains all the application screens/features.  View contain all the UI and function for screen folder for our project,            Create a separate folder for new screen
        - `file`: Each file should be stored inside its own folder and inside a file for its code and a separate one for the styles and tests
        - `file.js`
        - `styles.js`
        - `test.js`
        - Index.js - In index.js we can export all the used Screen in the Container file 
   - `Hooks` : In hooks file, It Allows you to use React Native features without writing a class 
        - `UseTheme.js` - useTheme is the file, where we handled the theme for the Application, Based on theme it will reflect the font,image,layout and                etc. 
        - `Index.js` - In index.js we can export all the used hooks component in the hooks folder 

   - `Navigation` : This folder contain the navigation part of the application
        -  `Application.js` -  Navigation that passes between Screen 
        -  `Main.js` - It Contain the botton tab and tab Screen navigation handling  
        -  `Utlis.js` - Navigation behaviour of each screen 

   - `reducers` : In redux files, It contains Action, reducer and Action Types
        - `Action` -  Payload of Information that sends data from our application to Store, f state change means it will dispatch through action. It Contain two property type and Payload. These are dispatched through action 
        - `Action Type` - Action type contain the type of action which we are going to pass through the dispatch. For each action it contain Success and Failure  
        - `Reducer` : When the Action Changes its type means, action is dispatched to reducers for state change to make the changes in state and return to new state for our application 

   - `Service` :  This folder contains the API part of the Application
        - `Modules` – In Modules we will handle the API part and base URL things 

   - ` Store` : A store is an object that holds the entire state of the Application. With the store, we can hold and access the current state of the Application. It has a dispatch method that allows updating the state of the Application.
   - `Theme` : Theme contain all the reusable component and common string,image and color file  
        - `Components` – Component contain all the reusable components that we are going to use in this app

   - `Translation` : Translation Contain the language string folder, Which the user can select their language 

# Android 
   A map associating builds with env files is already defined in `app/build.gradle`

# IOS
  The basic idea in iOS is to have one scheme per environment file, so that we can easily alternate between them.

  To create a new scheme:       
  - In the Xcode menu, go to Product > Scheme > Edit Scheme
  - Click Duplicate Scheme on the bottom
  - Give it a proper name on the top left. For instance: "qa"
  - Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:
    
  Expand the "Build" settings on left     
  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file",  type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.


# Styleguide

   For coding styling we decided to go with ESLint and [React Native community's Styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme)
