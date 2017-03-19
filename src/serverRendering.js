export default (req, res) => {
  const HTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Chat App</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
      </head>
      <body>
        <div id="root"></div>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `
  res.status(200).end(HTML)
}
