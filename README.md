# Vue/TS Widget - Practice

<img width="420px" src="./preview.gif" />

 - Node: v18.18.2              
 - Stories folder structure is based on Emulsify    
 - Vue / Storybook setup is based on [this article from farcaller.](https://farcaller.medium.com/vue-storybook-typescript-starting-a-new-project-with-best-practices-in-mind-3fc7b3ceae4e)    
 - views/HomeView.vue is used for demonstration purposes to prove that the component is usable in a Vue project
 - I only wrote tests to test agains the conditions in the brief
 - I have decided to use PlayWright for e2e as it works out of the box. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Feedback
 - no http call - response is hard coded
    - This was the first task on the pair programming which I failed, because on PerProductWidgets the data wasn't created in computed (I debugged this after)
 - responsiveness - when getting closer to mobile state the components columns don't behave as expected
    - added css grid to satisfy criteria 
 - scaleability not the best - when adding more components there is some issue
 - accessibility - I forgot to ask for details on this

