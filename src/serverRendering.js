export default (req, res) => {
  const HTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Chat App</title>
        <link href="https://fonts.googleapis.com/css?family=Prompt:400,400i,500,500i,600,600i&amp;subset=thai" rel="stylesheet">
      </head>
      <body>
        <div id="root"></div>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `
  res.status(200).end(HTML)
}
