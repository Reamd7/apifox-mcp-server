import * as tsup from 'tsup';
import * as zx from "zx";

async function main() {
    const pkg = JSON.parse(zx.fs.readFileSync('./package.json', 'utf-8'));
    await tsup.build(pkg.tsup)
}

main()