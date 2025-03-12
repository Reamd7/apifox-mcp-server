import * as tsup from 'tsup';
import * as zx from "zx";

async function main() {
    const pkg = JSON.parse(zx.fs.readFileSync('./package.json', 'utf-8'));
    await tsup.build(pkg.tsup)

    zx.fs.writeFileSync('./dist/package.json', JSON.stringify({
        main: 'index.js',
        bin: {
            [pkg.name]: "./index.js",
        },
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        keywords: pkg.keywords,
        license: pkg.license,
        author: pkg.author,
        repository: pkg.repository,
        "publishConfig": {
            "registry": "https://registry.npmjs.org/"
        },
        "engines": {
            "node": ">=18"
        },
        "files": [
            "index.js",
            "README.md"
        ],
    }, null, 2));
    zx.fs.copyFileSync('./README.md', './dist/README.md');
    zx.$({
        cwd: './dist',
    })`npm publish --dry-run`
    zx.$({
        cwd: './dist',
    })`npm pack --pack-destination ../`
    zx.fs.copyFileSync('./.npmrc', './dist/.npmrc');

    await zx.$({
        stdio: "inherit"
    })`npx -- ./dist -V`

    await zx.$({
        stdio: "inherit"
    })`npm exec -- ./dist -V`
}

main()