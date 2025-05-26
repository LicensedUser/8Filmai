const express = require('express');
const axios = require('axios');
const app = express();
const port = 8485;

const fs = require('fs-extra');
const path = require('path');

const CACHE_DIR = path.join(__dirname, 'cached_pages8000');

// List of blocked IPs
const blockedIPs = [
  // Add more IPs here
];

// Middleware to block specific IPs
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const normalizedIP = ip.replace(/^.*:/, '');
  console.log('User IP:', normalizedIP);

  if (blockedIPs.includes(normalizedIP)) {
    console.log(`Blocked IP tried to access: ${normalizedIP}`);
    return res.status(403).send('Access denied.');
  }

  next();
});



app.get('/{*splat}', async (req, res) => {
  const url = req.originalUrl;
  const remoteUrl = `https://176.97.124.27${url}`;

  let cachePath = path.join(CACHE_DIR, decodeURIComponent(url));
  if (cachePath.endsWith('/')) {
    cachePath = path.join(cachePath, 'index.html');
  } else {
    cachePath += '.html';
  }

  try {
    if (await fs.pathExists(cachePath)) {
      const cachedContent = await fs.readFile(cachePath, 'utf8');
      return res.send(cachedContent);
    }

    const response = await axios.get(remoteUrl);
    const contentType = response.headers['content-type'] || '';

    if (!contentType.includes('text/html')) {
      res.set('Content-Type', contentType);
      return res.send(response.data);
    }

    // Save raw HTML without modifications
    const rawContent = response.data;
    await fs.outputFile(cachePath, rawContent, 'utf8');

    res.send(rawContent);

  } catch (error) {
    console.error(`Failed to fetch: ${remoteUrl} — ${error.message}`);
    res.status(500).send('Error fetching or saving content.');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
