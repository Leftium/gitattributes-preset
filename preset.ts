import { Preset } from 'apply';

Preset.setName('gitattributes-preset');
Preset.extract().whenConflict('skip');
Preset.edit('.gitattributes').update((content, preset) => {
    let result = content;

    if (!result.includes('package-lock.json')) {
        result += `\npackage-lock.json   diff=nodiff`;
    }

    if (!result.includes('yarn.lock')) {
        result += `\nyarn.lock           diff=nodiff`;
    }

    if (!result.includes('pnpm-lock.yaml')) {
        result += `\npnpm-lock.yaml      diff=nodiff`;
    }

    return result;
});
Preset.execute('git', 'config', 'diff.nodiff.command', 'f () { echo \"Diff skipped: $1\"; }; f $1');

