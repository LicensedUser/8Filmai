const express = require('express');
const axios = require('axios');
const app = express();
const port = 3500;



// Helper function to rewrite <img src="">
function rewriteImgSrc(html, baseUrl) {
  return html.replace(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi, (match, src) => {
    let newSrc = src;
    if (!src.startsWith('http')) {
      const base = new URL(baseUrl);
      newSrc = new URL(src, base).href;
    }
    return match.replace(src, newSrc);
  });
}

// Helper function to replace inline icons with emojis
function replaceInlineIcons(html) {

  html = html.replace(/<a href="https:\/\/176\.97\.124\.27(\/[^\"]+)"/g,'<a href="http://localhost:3500$1"');


  html = html.replace(/<span class="icon-star2"><\/span>/gi, '⭐');
  html = html.replace(/<i class="icon-angle-up"><\/i>/gi, '🔼');


  html = html.replace(/<a class="arrow_pag"[^>]*>.*?<\/a>/g, '');

  html = html.replace(/<img src="\/(wp-content\/themes\/8filmai\/assets\/img\/flags\/[^"]+)"/g, (match, p1) => {
    return `<img src="https://176.97.124.27/${p1}"`;
  });


  return html;
}

// Helper: Replace the search form
function replaceSearchForm(html) {
  return html.replace(
    /(<div class="headitems[^>]*>\s*<div id="advc-menu" class="search">\s*<form[^>]*method="get"[^>]*id="searchform"[^>]*action=")(https:\/\/176\.97\.124\.27)("[^>]*>)/gi,
    '$1http://localhost:3500$3'
  );
}

function replaceLogoLink(html) {
  return html.replace(
    /(<div class="logo">\s*<a\s+[^>]*href=")https:\/\/176\.97\.124\.27(")/gi,
    '$1http://localhost:3500$2'
  );
}


function removeFormBlock(html) {
  return html.replace(
    /<div class="ulli">.*?<form data-sf-form-id="41".*?<\/form>.*?<\/div>/gs,
    ''
  );
}



//function replaceFlagImages(html) {
//  const matches = [...html.matchAll(/\/wp-content\/themes\/8filmai\/assets\/img\/flags\/[^"']+\.jpg/gi)];
//  console.log("🏳 Found flag image paths:", matches.map(m => m[0]));
//
//  return html.replace(
//    /<img\s+[^>]*?src\s*=\s*["']\/wp-content\/themes\/8filmai\/assets\/img\/flags\/([^"']+\.jpg)["'][^>]*?>/gi,
//    '<img src="https://176.97.124.27/wp-content/themes/8filmai/assets/img/flags/$1">'
//  );
//}




// Helper function to inject custom CSS
function injectCustomStyle(html) {
  const styleTag = `
    <style>
      /* 🔽 Replace dropdown caret */
      .head-main-nav ul.main-header li.menu-item-has-children > a::after {
        content: "🔽";
        font-family: inherit !important;
        font-size: 12px;
        margin-left: 5px;
      }

      /* ⏩ Replace submenu arrows */
      .head-main-nav ul.main-header li ul.sub-menu li a::before {
        content: "⏩";
        font-family: inherit !important;
        font-size: 12px;
        margin-right: 10px;
      }
      .starstruck .star-on-png::before {
      content: "🌠";
      color: #408bea;
      }
      .starstruck .star-off-png::before {
      content: "🔯";
      color: rgba(255,255,255,0.15);
      }

      .sbox .custom_fields span.valor strong::before {
      font-family: icomoon !important;
      content: "⭐";
      float: left;
      font-size: 12px;
      top: 0;
      left: 8px;
      font-weight: 400;
      position: absolute;
      }

      .icon-account_circle::before {
      content: "👨🏻‍💻";
      }


      .icon-search2::before {
      content: "🔍";

      }

      .searchandfilter ul li {
      visibility: hidden;
      }


    </style>
  `;
  return html.replace('</head>', `${styleTag}</head>`);
}

// Define a route to capture any URL after localhost
app.get('/{*splat}', async (req, res) => {
  const url = req.originalUrl;  // Captures the full URL
  
  // Construct the new URL for the remote server
  const remoteUrl = `https://176.97.124.27${url}`;

  try {
    // Fetch content from the remote URL
    const response = await axios.get(remoteUrl);
    console.log(remoteUrl);
    
    // Modify the response data
    let modifiedContent = response.data;

    // Step 1: Rewrite image src URLs
    modifiedContent = rewriteImgSrc(modifiedContent, remoteUrl);

    // Step 2: Replace inline icon spans with emojis
    modifiedContent = replaceInlineIcons(modifiedContent);

    // Step 3: Inject custom styles
    modifiedContent = injectCustomStyle(modifiedContent);

    // Step 4: REPLACE Search
    modifiedContent = replaceSearchForm(modifiedContent);

    // Logo Link
    modifiedContent = replaceLogoLink(modifiedContent);

    modifiedContent = removeFormBlock(modifiedContent);

    

    //modifiedContent = replaceFlagImages(modifiedContent);
    
    // Send the modified content as the response
    res.send(modifiedContent);
  } catch (error) {
    console.error(`Error fetching from ${remoteUrl}:`);
    res.status(500).send('Error fetching the content');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
