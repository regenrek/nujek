---
title: Setup Storyblok
description: ''
category: Getting started
position: 3
---

## Register at Storyblok

1. [Register](https://app.storyblok.com/#!/signup) at Storyblok for free.
2. Create an empty space.

## Obtain your API Key

1. Go to **Settings -> API Key** Tab
2. Create a new **Preview Token**. 
3. Add token to your `env` file:

```bash
SB_CLIENT_ACCESS_TOKEN=<your access token>
```

## Storyblok Management API

If you plan to create stories with Storyblok from client side we luckily  have Storybloks Management API. To get it work you have to create an `oAuthToken` in your storyblok space. 

1. Create an [oAuthToken](http://app.storyblok.com/#!/me/account)
2. Get your [Space ID](https://www.storyblok.com/faq/where-can-i-find-my-space-id)

After you have obtained your created oAuthToken add it to the `.env`file.

```bash
SB_SPACE_ID=<your space id>
SB_MANAGEMENT_OAUTH_TOKEN=<your oauth token>
```