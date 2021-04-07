**Usage:**

    npx apply leftium/gitattributes-preset

- This preset configures git so so diffs for machine-generated files are not shown.
- Instead, only the paths of these files are output to the console.
- Changes are still tracked (unlike .gitignore).

**Actions taken by this preset:**
1. Creates .gitattributes file if not present.
2. Adds lines so common lock files are processed by `nodiff`.
3. Configures `nodiff` diff driver to echo filename to console.

More information about [presets](https://usepreset.dev/).
