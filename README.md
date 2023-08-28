# Frontend Platform ✨

This is a template to start your own frontend platform with Next, Serverless, Module Federation, Tailwind

## Intention

Platforms are meant to help Streamed Aligned teams deliver value to end users as quickly as possible with high quality technology. This mono-repository shows different tools set up together to enable streamed align teams.

## Module Federation

Micro frontends helps team work on different domains while being on the same pages, SPA.
Module federation is a tool to render those frontends together.
In this templates, I have set up :

- a core app with Next, meant to put together and deploy the different micro-frontends
- a search app with Next as well, meant to create components and pages owned by the Search domain.

For this to work, I have added in [Core's next config](services/frontend-core/next.config.js), the module federation plugin config that fetches the different micro-frontends.
Then I have added in Search's Next config, a similar configuration that exposes Search components on a remote url. The component can then be imported in Core server side or client side.

## Data fetching

Todo

## Type sharing

Todo
