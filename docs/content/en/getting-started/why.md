---
title: Why
description: ''
category: Getting started
position: 2
---

## Introduction

Where Storyblok is solving the content problem - Nujek is solving the hassle to setup your Nuxt.js Website with Storyblok to make setup a breeze.

## The need of managing content

In most client website projects you will need a system where the author can manage the content (text, images, video, ...) in the easiest way possible. 
For this use case content management systems were born. 

Some time ago we built websites with wordpress to give our clients an easy way to manage content. As time flies, "better" things come up in terms of usability, speed, and security. So we found with Storyblok **a perfect match** to build our websites.

Storyblok writes on their website:

* <b><i>The world's first headless CMS that works for both developers & business users.</i></b>

If you a wordpress developer you probably have worked with visual page builders like elementor, visual composer, beaver builder to name a few. Visual Page builders gives authors ultimate experience to see live website edits, work with modular sections or blocks and have the flexibility to reorder them.

* <b><i>Storyblok offers a unique combination of visual editing tools and highly customizable content blocks...</b></i>

Voila! Storyblok has a fast visual page builder built-in and additionally you will gain a big developer experience with it.


* <b><i>The first component-based headless CMS</b></i>

Yep. You able to code your vue, (react, angular) components and reflect them in storyblok.


If you need more information about Storyblok head over to their [website](https://www.storyblok.com/features).

## Why does Nujek this exist?

In the above section we explained somehow why we tend to use storyblok but whats the existance of `nujek` now?
### 1. Project Quickstart

For every client website you start you will need probably to care about repetive tasks like setup boilerplate code. 

**Task:** Connect Storyblok API in your project.

> Add your access Token in a secure `.env` file

**Task:** Writing logic within pages which handles Storyblok Bloks in frontend

>Nujek Dynamik Blok components will handle Storyblok Blok rendering. You just define your scheme and content in Storyblok and it will get reflected in your frontend. 

### 2. Build components

**Task:** There are multiple ways to design your website. Starting component design from scratch, using a UI Kit e.g. Anyway this systems need manual work to connect this accordingly to storyblok cms.

We have prepared some common components which are ready to use with
storyblok like [Image](#), [Section](#) and even powerful search and filterable [Grids](#)

**Task:** Preview content from Storyblok with debug components - even if they aren't yet implemented. 

>Storyblok as it names say works with bloks. So you build your landingpages as blocks within a loop. > We have prepared a visual setup so you just have to build these blocks in form of a vue component. As easy it is.


### 3. Other

Nujek is just a module for nuxt which doesn't change anything in core so that means
you basically have a nuxt project. So power it up with more modules, plugins or whatever
you like. Include it in your own starter project. Everything is possible. We have
prepared some tutorials to see how you can gain more

* Track websites user with Analytics.
* Vue Cookie Law for GDPR.
* ...

## Stack

We tend to focus on a specific stack for constantly improvment.

* Storyblok CMS
* Nuxt.js
* TailwindCSS