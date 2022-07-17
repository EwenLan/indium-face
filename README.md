# Indium Face

A web page template built by Reace and Antd.

## Preview

![image](Screenshot%202022-07-17%20171244.png)

## How to run this sample

Clone this project by

```
git clone https://github.com/EwenLan/indium-face.git
```

Install dependency by

```
yarn install
```

Run this app in development mode by

```
yarn start
```

Builds the app for production to the build folder by

```
yarn build
```

## Modify by yourself

### Add a new page for your app

Find file under `src/routes` folder

```
└─src
    ├─common
    ├─pages
    │  ├─about
    │  └─home
    ├─routes
    └─templates
       └─routes
          │─home.tsx
          └─index.tsx
```

Modify `home.tsx` and add this express under the expression for the third page

```
{ pathName: "thirdpage", title: "Third Page", element: <ThirdPage /> }, 
```

> `pathName` is used for react router, so the name shall meets the requirement of URL.

> `title` is used for the list on the left of the page

> `element` is the DOM shows on the right of this page
