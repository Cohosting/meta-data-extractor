!["Image description"](https://www.vision-advertising.com/wp-content/uploads/2022/03/Metadata.jpg)

## Metadata Extractor 

This Node.js application provides an API endpoint to extract metadata from any given URL. It leverages the `url-metadata` library to retrieve information like title, description, images, and more.

### Features

* Extracts basic metadata (title, description) from a provided URL.
* Retrieves image URLs from the webpage's HTML.
* Extracts the site name and domain from the URL.
* Handles potential errors gracefully and returns informative messages.
* Optionally parses Open Graph (`og:`) meta tags for improved accuracy (availability depends on the website).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/url-metadata-extractor.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   node index.js
   ```

2. Make a GET request to `http://localhost:3000/metadata` with the `url` parameter specifying the target website:

   ```bash
   curl http://localhost:3000/metadata?url=https://www.example.com
   ```

   Replace `https://www.example.com` with the actual URL you want to extract metadata from.

3. The server will respond with a JSON object containing the extracted metadata:

   ```json
   {
     "title": "Example Website Title",
     "description": "A brief description of the website",
     "images": ["https://example.com/image1.jpg", "https://example.com/image2.png"],
     "sitename": "example",
     "favicon": "https://example.com/favicon.ico",
     "domain": "https://www.example.com",
     "url": "https://www.example.com",
     "ogImageUrl": "https://example.com/og_image.jpg", // (Optional)
     "ogTitle": "Open Graph Title", // (Optional)
     "ogDescription": "Open Graph Description" // (Optional)
   }
   ```

**Note:** Availability of certain metadata fields might vary depending on the target website's implementation.

