## Contributing

- Fork it (https://github.com/hiiruki/hsr-sorter/fork).
- Create your feature branch (`git checkout -b my-new-feature`).
- Commit your changes (`git commit -am 'Add some feature'`).
- Push to the branch (`git push origin my-new-feature`).
- Create a new Pull Request.

## Note

All changes need to be made in the source files located in the `src` folder.
- Character data is located in `src/js/data/`.
- Make sure when adding new characters, create a new dataset in `src/js/data/` using this format `YYYY-MM-DD.js`. For example, `src/js/data/2023-12-31.js`.
- Put the new dataset in the HTML files like this `<script src="src/js/data/2023-12-31.js"></script>` in the `<head>` tags.
- Make sure to change the dataset version in `/src/js/data.js` files to the latest dataset. If the latest dataset is `2023-12-31.js`, then change the version to `2023-12-31`. For example `let dataSetVersion = '2023-12-31';` at [line 18](https://github.com/hiiruki/hsr-sorter/blob/main/src/js/data.js#L18).

Always test the results before committing.
