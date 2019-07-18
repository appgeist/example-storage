# [@appgeist/storage](https://github.com/appgeist/storage) example

A simple example to demonstrate the usage of [@appgeist/storage](https://github.com/appgeist/storage).

## Running

1. `yarn install` or `npm install`
2. `yarn dev` or `npm run dev`
3. Upload files by `POST`ing requests to paths such as `http://localhost:3000` or `http://localhost:3000/subfolder/to/store`. In Postman, make sure to set Body type to `form-data`, add a File property with `file` key and select a file to upload.
4. Request uploaded files by accessing URLs such as `http://localhost:3000/ceb88dea-5135-4321-8af8-846e29b7efc4.webp`, `http://localhost:3000/ceb88dea-5135-4321-8af8-846e29b7efc4.jpg`, `http://localhost:3000/ceb88dea-5135-4321-8af8-846e29b7efc4-w200-h200.webp`, `http://localhost:3000/ceb88dea-5135-4321-8af8-846e29b7efc4-w50-h50-lq.jpg`, where `ceb88dea-5135-4321-8af8-846e29b7efc4` is the UUID returned by successfully uploading a picture to `http://localhost:3000`.

See [@appgeist/storage](https://github.com/appgeist/storage) README for more info and feel free to inspect the source code.

## License

The [ISC License](LICENSE).
