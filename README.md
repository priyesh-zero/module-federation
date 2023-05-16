# Module Federation

## Introduction

This repository is a basic setup of module federation between different types of react application including applications created using vite, CRA and NextJS.

## Module Federation

Module Federation is a feature of Webpack 5 that allows for the dynamic loading of multiple versions of a module from multiple independent build systems. It enables the sharing of modules in a distributed system by shipping those critical shared pieces as macro or micro as desired. Module Federation allows loading separately compiled and deployed code, such as micro frontends or plugins, into an application.

The main advantage of using Module Federation over something like Shared NPM library or MonoRepo is the code injected into the system at runtime rather than on build time allowing the easy upgrades over multiple projects just by updating the common codebase.

## Stage

In this repository shows an example of multiple apps like `Consumer`, `Employer` and `Admin` with different setup process to check intercompatibility, the setup is as follows

-   `Common [Vite (React + Typescript)]`: This hosts all the common components (for this example only few simple ones like Button and Store)
-   `Consumer [Vite (React + Typescript)]`: This is the consumer facing application which also exposes the nav for the other applications
-   `Employer [CRA + Typescript]`: This is the CRA app which uses webpack and symbolizes as an intenal app for the employees
-   `Admin [NextJS]`: This hosts the admin part of the website and is built on NextJS

## Type Safety

By extending all the tsconfigs with the one sharing the code and setting paths for imports in the shared apps, the types of the shared components is recognized by the editors and intellisense of the editors work as expected.
