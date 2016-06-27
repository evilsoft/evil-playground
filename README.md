## Evil Playground

Just a simple playground that can be used for trying things out or just to explain something to someone.
Provides an environment set up to use es2015 Javascript that will auto run changes you make.
Other features include a colorful logging system and tape set up for writting specs for your own assertions.

As always this will only work with a POSIX based system.

***NOTE:*** This codebase has removed babel and as such requires the latest stable version of nodejs. (6.x or higher).

### Install

Clone this repo onto your local system, navigate to the folder and run:

```
$ npm install
```

This will install the dependencies for this project. After that finishes, you should be good to go.

### Usage

There are two main use cases for this playground. Run some code or test some code.

#### Run some code

To get started running some code, just run the following in the project root:

```
$ npm start
```

The initial 'Up and running' string should appear once started and you are good to go. Now just edit the
`index.js` file in the roots, and your code will be executed on each save.

#### Test some code

Testing is set up with tape.
Specs live in the `test` directory and can be run in one of two ways, each with it's own command.

##### One shot

To run all of your specs and exit at the end with the results, all you need to do is run:

```
$ npm test
```

##### Watch and run
If you would like to run the specs everytime you make a change to the specs or your units under test, just run:

```
$ npm run test:watch
```

### Some neat things to know about

Both ramda and lodash are included in this build. No need to install them yourself. Also included is a pretty,
colorful logging system. The logging system can be included by importing from `lib/log.js`.


Happy Playing!!!
