---
title: Connect Storyblok
description: ''
category: installation
position: 13
---

## Register at Storyblok

1. [Register](https://app.storyblok.com/#!/signup) at Storyblok for free.
2. Create an empty space.

## Obtain your API Key

1. Go to **Settings -> API Key** Tab
2. Create a new **Preview Token**. 
3. Copy `.env.example` to `.env`
4. Add token to your `env` file:


```bash[.env]
SB_CLIENT_ACCESS_TOKEN=<your access token>
```

## Storyblok Management API

<alert>**Notice:** If you don't plan to create stories in frontend skip this.</alert>

If you plan to create stories with Storyblok from client side we luckily have Storybloks Management API. To get it work you have to create an `oAuthToken` in your storyblok space. 

1. Create an [oAuthToken](http://app.storyblok.com/#!/me/account)
2. Get your [Space ID](https://www.storyblok.com/faq/where-can-i-find-my-space-id)

After you have obtained your created oAuthToken add it to the `.env`file.

.env
```bash
SB_SPACE_ID=<your space id>
SB_MANAGEMENT_OAUTH_TOKEN=<your oauth token>
```