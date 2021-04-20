---
title: 'How to create your free hosted personal blog in 5 minutes using NodeJS, Typescript and Markdown'
excerpt: 'My first post with step-by-step tutorial how to build your personal blog on the example of thix exact blog that you see now..'
coverImage: 'https://lh3.googleusercontent.com/3ZzxudISMQcFXIr3-oRVRK1j7QPMSiPs3ioIl9GFpfZFtmkrjsazPGTghVSfOgprBHcecTBjHt0FuB4VBNdsD-NJQvbwcXBqsbojm4l24FEhkXD_nWzkWgq2up-nUl4aJtZLdHY4guA=w2400'
date: '2021-04-18T11:00:00'
author:
  name: Alex Makarov
  picture: 'https://lh3.googleusercontent.com/hRr-l9cZsF8BP1wyI_B11ZGLtTOEYFxJfJXMuwutrND0d4OmfcAfRHDfSmAbxK0WtrqS4lxOIYz6e4XX9QH_tKbBQ1GqEeqD7C7XE5AD9qWVNVbMgJnvP9udicqXRa7wbC1H2YINlig=w2400'
ogImage:
  url: ''
---

> “If you can’t explain it to a 6-year-old, you don’t understand it yourself”
>
> *Albert Einstein* 

Sometimes you catch yourself on thinking about you want to share some invention that comes to your brain 5 minutes ago with other people, maybe discuss it or just show your beautiful sunset photos to get likes or comments from your subscribers, yeah i am talking about blogging. There are bunch of approaches to reach the goal. For the most purposes using of ready to go SAAS platforms like Blogger or Wordpress is enough, but what if you are developer and you want to create your "true coding" blog as a portfolio page and you want to customize it in your way, not only use blocks or styles provided by default. 

This kinda blog is for people who wants to realize their coding potential, for those who enjoy the programming and web developing process itself and wants standalone self created and self hosted independent web application, modern and scalable. In abstract -  It is like a compare chopper custom created bike, and usual bike from shop. 

 So long story short, this is my first post, in my personal blog that i have started today. I have chosen NextJS framework as i am web developer and familiar with ReactJS. NextJS framework based on ReactJS, so you got all the React features plus SEO friendly features like Server Side Rendering (SSR).

One of the handy purposes of this blog forme is my English training. Sorry if my English level will be rough for you, dear friend. This is my first post, and first practice in writing in English.

If you want to know more about me, don't hesitate and welcome to [about page](/posts/about).

## Prerequisites

To complete this task you will need only 3 things:

- Linux

  Ubuntu Desktop is a best choice for  the web development environment creation, unites powerful features of the server and easy to work with due to modern and user friendly Gnome graphical user interface.

- Coding experience

  You will need at least basic knowledge on web development: HTML, CSS, JavaScript and of course ReactJS framework, Junior level and basic skills will be enough. You should understand what is the CLI, Git, how to clone repository, how to install NPM dependencies and run programs in development mode. If that word do not sounds like a magic for you - it will be easy to create your blog in NextJS in 5 minutes.

- Editor

  For the work purposes i am using VSCode and strictly recommend to use it. Most convenient IDE that i used ever, not only for coding, even for micro-planning, work logs,  or just daily basis text editing. This editor has  myriad of extensions for many things to do.

## Requirements

The most important thing in the web applications creatin process is a requirements determination. So i want our blog requirements:

- Blog will be hosted free
- Based on Relieble and modern framework
- Synced with Github including content
- Easy writing post even in Vim from a console, don't require database
- Static - dont require backend, but can be scallable to the more serious thing
- It should give realization to my potential as a programmer

## Why NextJS?

- Javascript and ReactJS based
- NextJS special features
- SEO friendly

## Why Typescript?

- Error handling

## Let's Create our blog

For your convenience i have done all the job with basic creation, typescript implementation, testing so you got ready to go boilerplate that can be cloned from shared git repository. In any other way our blog creation process could be more than 5 minutes, for me it takes ~1 day. If you would like to get step-by-ste tutorial how to build your NextJs web application, you can find it on official NextJs framework website. Our goal is creating out blog in 5 minutes, so let's start to create our personal blog using NextJS and Typescript.

```bash
yarn create next-app --example next-typescript-example my-blog
```



## Content management system (CMS) and Markdown

I jave chosen markdown as...

_Markdown in VSCode screenshot_

I don't want to use local File Storage so all the images will be inserted from Google Photos...
All the images made by me, at the moment i dont have camera so i will use my phone that auto synced with google photos, then i will insert links in my blog

- Dont need any admin panel edit my posts right in VSCode or any other convinient markdown editor

  - Typora editor
    Dark mode
    clear design, zen writing
    
    ```
    <!-- TODO Insert screenshot -->
    ```

- Comments
- Can insert code examples, good for tutorials and IT

## Google Images integration

_Google Photos Insert_



https://www.labnol.org/embed/google/photos/

Problem with image insertion...

```bash
yarn add next-compose-plugins next-images
touch next.config.js
```

```js
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
```

## About subscription
