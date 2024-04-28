const express = require('express');
const urlMetadata = require('url-metadata');

const app = express();
const port = 9000;

async function extractMetadata(url) {
  try {
    const metadata = await urlMetadata(url);
    console.log(metadata)
    const extractedData = {
      title: metadata.title,
      description: metadata.description,
      images: metadata.imgTags.map(imgTag => imgTag.src), // extract image URLs from imgTags
      sitename: extractSiteName(url), // helper function to extract sitename
      favicon: metadata.favicon,
      duration: null, // might not be available from url-metadata
      domain: extractDomain(url), // helper function to extract domain
      url,
      ogImageUrl: metadata['og:image'],
      ogTitle: metadata['og:title'],
      ogDescription: metadata['og:description'],
    };
    return extractedData;
  } catch (error) {
    console.error(`Error fetching metadata for ${url}:`, error);
    return null; // handle errors gracefully
  }
}

function extractSiteName(url) {
  const hostname = new URL(url).hostname;
  return hostname.split('.')[0]; // basic site name extraction
}

function extractDomain(url) {
  return new URL(url).origin;
}

// Route to handle metadata extraction requests
app.get('/metadata', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ message: 'Missing required parameter: url' });
  }

  const metadata = await extractMetadata(targetUrl);
  if (metadata) {
    res.json(metadata);
  } else {
    res.status(500).json({ message: 'Error fetching metadata' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});