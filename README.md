[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/ember-codemod-pod-to-octane/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/ember-codemod-pod-to-octane/actions/workflows/ci.yml)

# ember-codemod-pod-to-octane

_Codemod to un-pod Ember apps, addons, and engines_


## Features

- Preserves your code whenever possible
- Supports [`ember-css-modules`](https://github.com/salsify/ember-css-modules)


## Usage

Step 1. Quickly return to [default Octane](https://cli.emberjs.com/release/advanced-use/project-layouts/#classiclayout).<sup>1</sup>

```sh
cd <path/to/your/project>
npx ember-codemod-pod-to-octane <arguments>
```

> [!NOTE]
>
> By default, Octane assumes the **flat component structure**. So does this codemod to help different Ember projects converge to one layout. If you want the **nested component structure** (also supported by Octane), you can run [`ember-flat-to-nested`](https://github.com/bertdeblock/ember-flat-to-nested) afterwards.

Step 2. Remove `podModulePrefix` from `config/environment.js` and `usePods` from `.ember-cli`.

Step 3. Update references originating from, as well as pointing to, the moved files. These can include `import` statement, `composes` property from `ember-css-modules`, etc.

> [!TIP]
>
> Linters can help you find the files that need to be updated.
>
> ```sh
> # With eslint-plugin-import
> [lint:js] /my-v1-addon/addon/index.ts
> [lint:js]   1:49  error  Unable to resolve path to module './components/navigation-menu/component'  import/no-unresolved
> 
> # With typescript
> [lint:types] addon/index.ts:1:49 - error TS2307: Cannot find module './components/navigation-menu/component' or its corresponding type declarations.
> [lint:types] 
> [lint:types] 1 export { default as NavigationMenu } from './components/navigation-menu/component';
> ```


### Arguments

You must pass `--type` to indicate what type of project you have.

```sh
# For classic apps
npx ember-codemod-pod-to-octane --type app

# For v1 addons (including engines)
npx ember-codemod-pod-to-octane --type v1-addon
```


<details>

<summary>Optional: Do a test run</summary>

Pass `--test` to preview how the codemod will move files.

```sh
npx ember-codemod-pod-to-octane --test
```

</details>


<details>

<summary>Optional: Specify the project root</summary>

Pass `--root` to run the codemod on a project somewhere else (i.e. not in the current directory).

```sh
npx ember-codemod-pod-to-octane --root <path/to/your/project>
```

Note, you can use `--root` to un-pod the demo app of an Ember addon.

```sh
# If the current directory is the addon root
npx ember-codemod-pod-to-octane --type app --root tests/dummy
```

</details>


<details>

<summary>Optional: Specify the pod path</summary>

Pass `--pod-path` if `podModulePrefix` has been set in `config/environment.js`. "Subtract" `modulePrefix` from `podModulePrefix` to get the pod path.

```sh
# If modulePrefix is 'my-app' and podModulePrefix is 'my-app/pods'
npx ember-codemod-pod-to-octane --pod-path pods
```

</details>


### Limitations

The codemod is designed to cover typical uses of an Ember app, addon, and engine. It is not designed to cover one-off cases.


<details>

<summary>Apps</summary>

To account for a bug (found when Ember CLI is combined with Ember Data), the codemod doesn't consider unit tests for adapters, models, and serializers. You will need to manually move the test files.

</details>


<details>

<summary>Addons</summary>

The codemod doesn't consider things related to Ember Data (i.e. adapters, models, and serializers).

</details>


To better meet your needs, consider cloning the repo and running the codemod locally.

```sh
cd <path/to/cloned/repo>

# Compile TypeScript
pnpm build

# Run codemod
./dist/bin/ember-codemod-pod-to-octane.js --root <path/to/your/project>
```

> [!TIP]
>
> You might clone the repo to migrate the project one component or one route at a time. For example, to migrate only the `<NavigationMenu>` component (and its subcomponents, if they exist), update the related file(s) in the `src` folder like this:
>
> ```diff
> export function mapComponentClasses(options: Options): FilePathMapEntries {
>   const { podPath, projectRoot } = options;
> 
>   const podDir = join('app', podPath, 'components');
> 
> -   const filePaths = findFiles(`${podDir}/**/component.{d.ts,js,ts}`, {
> +   const filePaths = findFiles(`${podDir}/navigation-menu/**/component.{d.ts,js,ts}`, {
> 
>   // ...
> }
> ```
>
> That is, look for `findFiles(`, then insert the component or route name between `podDir` and `**`.


## Compatibility

- Node.js v18 or above


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

If you have an open-sourced app or addon that I can use as a reference, reach out to me on [Discord](https://discord.gg/emberjs) at `ijlee2`. Please star this project so that I can gauge its importance to you and the Ember community. ⭐


## License

This project is licensed under the [MIT License](LICENSE.md).
