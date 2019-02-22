## Contributing

First fork this project.  

```shell
git clone <your-forked-repo>
npm install

git checkout -b my-fix
# fix some code...

git commit -m "added this feature"
git push origin my-fix
```

Lastly, open a pull request on Github.

The following npm script are available

- `npm start` - create build, install globally and run liftr
- `npm run build` - create build
- `npm run test` - install globally and run liftr
- `npm run link-upstream` - add remote
- `npm run sync` - fetch, checkout, merge and push
- `npm run copy-templates` - Moves templates to ./lib/templates
- `npm run refresh` - removes node modules, package-lock.json, lib and re-installs everything.