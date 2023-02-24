[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/ember-codemod-pod-to-octane/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/ember-codemod-pod-to-octane/actions/workflows/ci.yml)

# ember-codemod-pod-to-octane

_Codemod to un-pod Ember apps, addons, and engines_


## Usage

Step 1. Quickly return to [default Octane](https://cli.emberjs.com/release/advanced-use/project-layouts/#classiclayout).<sup>1</sup>

```sh
cd <your/project/path>
npx ember-codemod-pod-to-octane <arguments>
```

Step 2. Remove `podModulePrefix` from `config/environment.js` and `usePods` from `.ember-cli`.

Step 3. Update references originating from, as well as pointing to, the moved files. These can include `import` statement, `composes` property from `ember-css-modules`, etc.

<sup>1. By default, Octane assumes the **flat component structure**. So does this codemod to help different Ember projects converge to one layout. If you want the **nested component structure** (also supported by Octane), you can run [`ember-flat-to-nested`](https://github.com/bertdeblock/ember-flat-to-nested) afterwards.</sup>


### Arguments

You must pass `--type` to indicate what type of project you have.

```sh
npx ember-codemod-pod-to-octane --type=app
npx ember-codemod-pod-to-octane --type=addon
npx ember-codemod-pod-to-octane --type=engine
```


<details>
<summary>Optional: Do a test run</summary>

Pass `--test` to preview how the codemod will move files around.

```sh
npx ember-codemod-pod-to-octane --test
```

</details>


<details>
<summary>Optional: Specify the project root</summary>

Pass `--root` to run the codemod on a project somewhere else (i.e. not in the current directory).

```sh
npx ember-codemod-pod-to-octane --root=<your/project/path>
```

Note, you can use `--root` to un-pod the demo app of an Ember addon.

```sh
# If the current directory is the addon root
npx ember-codemod-pod-to-octane --type=app --root=tests/dummy
```

</details>


<details>
<summary>Optional: Specify the pod path</summary>

Pass `--pod-path` if `podModulePrefix` has been set in `config/environment.js`. "Subtract" `modulePrefix` from `podModulePrefix` to get the pod path.

```sh
# If modulePrefix is 'my-app' and podModulePrefix is 'my-app/pods'
npx ember-codemod-pod-to-octane --pod-path=pods
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

The codemod assumes that an addon is used to define components (not models or routes).

</details>


<details>
<summary>Engines</summary>

The codemod assumes that an engine is used to define routes and route-specific components.

</details>


To better meet your needs, consider cloning the repo and running the codemod locally.

```sh
cd <your/cloned/repo>
./bin/ember-codemod-pod-to-octane.js --root=<your/project/path>
```


## Compatibility

* Node.js v16 or above
* [`ember-css-modules`](https://github.com/salsify/ember-css-modules)


## Contributing

To provide feedback, you can reach out to me on [Discord](https://discord.gg/emberjs) at `ijlee2`. Please star this project so that I can gauge its importance to you and the Ember community. ⭐


## Credits

Thanks goes to FlashRecruit, Imago, and CLARK, who gave me the necessary Ember experience. Some code is based on [`ember-component-template-colocation-migrator`](https://github.com/ember-codemods/ember-component-template-colocation-migrator).


## License

This project is licensed under the [MIT License](LICENSE.md).
