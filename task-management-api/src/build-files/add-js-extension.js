import { replaceInFile } from 'replace-in-file';

const option = {
    files: 'dist/**/*.js', // Target all JS files in the dist folder
    from: /from ['"](?![a-zA-Z@])(.*?)(?<!\.js)['"]/g, // Match import paths without .js
    to: (match, p1) => `from '${p1}.js'` // Append .js to the import path
};

async function addJsExtension() {
    try {
        const results = await replaceInFile(option);
        console.log('Modified files:', results.filter(result => result.hasChanged).length);
    } catch (error) {
        console.error('Error occured:', error);
    }
}

addJsExtension();
