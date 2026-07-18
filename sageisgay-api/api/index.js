export default function handler(req, res) {
  // 1. Add your own direct image URLs here (ends in .jpg, .png, .gif)
  const images = [
    "https://imgur.com/uqD9KK8",
    "https://imgur.com/pD0rYQL",
    "https://imgur.com/cvNaQ99"
  ];

  // 2. Pick a random image from the array
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // 3. Dynamically generate the HTML that Messenger reads
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Random Image</title>
        <!-- These are the tags Messenger looks for -->
        <meta property="og:title" content="Look at this!">
        <meta property="og:description" content="A randomly selected image.">
        <meta property="og:image" content="${randomImage}">
        <meta property="og:type" content="website">
    </head>
    <body>
        <script>
            // If a real person clicks the link, send them directly to the image file
            window.location.href = "${randomImage}";
        </script>
    </body>
    </html>
  `);
}
