import fs from 'fs-extra';
import * as path from 'path';

export const createUtil = async (setupName: string) => {
    const fileContent = null;
    const gitIgnore: string = process.cwd() + `/${setupName}/.gitignore`;
    const tsLint: string = process.cwd() + `/${setupName}/tslint.json`;

    const utilFiles: string[] = [
        gitIgnore,
        tsLint,
    ];
    await utilFiles.forEach(async (createPath) => {
        await fs.writeFile(createPath, fileContent, (err) => {
            // if (err) throw err;
        });
        if (createPath.includes('.gitignore')) {
            await fs.copySync(path.resolve(__dirname, '../templates/.gitignoreTemplate'), createPath);
        }
        if (createPath.includes('tslint.json')) {
            await fs.copySync(path.resolve(__dirname, '../templates/tslintTemplate.json'), createPath);
        }
    });
};
