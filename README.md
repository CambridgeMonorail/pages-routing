# PagesRoutingTest

This repository is intended to test and validate the up-to-date configuration for a React integrated monorepo built with Nrwl Nx, Tailwind CSS, and shadcn components. The primary focus is to implement and validate the best approach to routing with React Router that works both locally (running on localhost) and when deployed to a GitHub Pages subdirectory for the project `pages-routing`.

## Project Structure

This project follows the Nx monorepo structure, organizing applications and libraries for better maintainability and scalability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Nrwl Nx**: A set of extensible dev tools for monorepos, which helps in managing and scaling the project.
- **Tailwind CSS**: A utility-first CSS framework for styling the components.
- **shadcn/ui**: A set of reusable UI components for consistent design.
- **React Router**: A library for routing in React applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vitest**: A Vite-native unit testing framework.
- **Playwright**: An end-to-end testing framework.

## Running the Project

To run the development server for the `demo` app, use:

```sh
npx nx serve demo
```

To create a production bundle:

```sh
npx nx build demo
```

To see all available targets to run for a project, run:

```sh
npx nx show project demo
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Available Scripts

In the project directory, you can run:

### `build:all`

Builds all projects in the workspace.

### `build:demo`

Builds the `demo` project.

### `build:shared`

Builds the `shared` project.

### `build:affected`

Builds all affected projects.

### `lint:all`

Lints all projects in the workspace.

### `lint:demo`

Lints the `demo` project.

### `lint:shared`

Lints the `shared` project.

### `lint:affected`

Lints all affected projects.

### `serve:demo`

Serves the `demo` project.

### `test:all`

Runs tests for all projects in the workspace.

### `test:demo`

Runs tests for the `demo` project.

### `test:shared`

Runs tests for the `shared` project.

### `test:affected`

Runs tests for all affected projects.

### `type-check:all`

Runs type checking for all projects in the workspace.

### `type-check:demo`

Runs type checking for the `demo` project.

### `type-check:shared`

Runs type checking for the `shared` project.

### `type-check:affected`

Runs type checking for all affected projects.
