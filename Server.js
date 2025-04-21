const express = require('express');
const axios = require('axios');
const app = express();
const port = 3500;


app.get('/robots.txt', (req, res) => {
  const customRobotsTxt = `
User-agent: *
Disallow: /private/
Allow: /
Sitemap: http://8filmai.hopto.org:3500/sitemap.xml
  `;
  res.type('text/plain');
  res.send(customRobotsTxt);
});

app.get('/sitemap.xml', (req, res) => {
  const customRobotsTxt = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>http://8filmai.hopto.org:3500/filmas/darbininkas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/mikis-17-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/tikras-skausmas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/viena-is-tu-dienu-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/paskutinis-oro-gurksnis-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/novokainas-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/marija-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/tylioji-brolija-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/duokis-tuokis-zudyk-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/jaunos-sirdys-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/kas-yra-luigi-mangione-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/kapitonas-amerika-drasus-naujas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/butybe-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/pinigine-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/elektrine-valstybe-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/palikimas-online-3/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/planktono-filmas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/better-man-robbie-williams-istorija-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/bob-dylan-visiskai-nezinomas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/uzkandziu-namelis-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/raganius-gelmiu-sirenos-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/aistru-virtuve-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/brutalistas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/gardute-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/rugsejo-penktoji-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/dogmeno-nuotykiai-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/zmogus-vilkas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/vagiu-irstva-2-pantera-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/srautas-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/sodyba-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/lyg-nescia-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/aukscio-ikaitai-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/spragtukai-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/mes-jus-nuosirdziai-kvieciame-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/bridzita-dzouns-pakvaisusi-del-vaikino-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/meskiukas-padingtonas-nuotykiai-peru-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/zvaigzdziu-kelias-31-skyrius-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/vilkolakiai-online-3/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/palydove-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/mano-kalte-londonas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/mufasa-liutas-karalius-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/gera-mergaite-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/konklava-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/nosferatu-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/atgal-i-darba-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/tarpeklis-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/pazadetoji-zeme-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/mire-nebeskaudina-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/largo-vincas-pinigu-kaina-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/paukstis-online-2/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/gonjiam-prakeikta-ligonine-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/vajana-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/dziaugsmas-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/6888-online/</loc></url>
  <url><loc>http://8filmai.hopto.org:3500/filmas/snaiperis-paskutine-tvirtove-online/</loc></url>
</urlset>
  `;
  res.type('text/plain');
  res.send(customRobotsTxt);
});


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

  html = html.replace('</head>', `<meta name="google-site-verification" content="CU1yf7Mm7aiaSJmi445S9NQ7pcLuXrqlpnKkpHo8dG0" /> <script async src="https://www.googletagmanager.com/gtag/js?id=G-KVZQHQZX42"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-KVZQHQZX42');</script></head>`); 

  html = html.replace(/<a href="https:\/\/176\.97\.124\.27(\/[^\"]+)"/g,'<a href="http://8filmai.hopto.org:3500$1"');

  
  html = html.replace('</body>', '<script id="_wauf9q">var _wau=_wau||[];_wau.push(["small","2r6iamt32t","f9q"]);</script><script async src="//waust.at/s.js"></script></body>')

  html = html.replace(/<span class="icon-star2"><\/span>/gi, '⭐');
  html = html.replace(/<i class="icon-angle-up"><\/i>/gi, '🔼');

  html = html.replace(/<script[^>]*type=["']application\/ld\+json["'][^>]*class=["']saswp-schema-markup-output["'][^>]*>[\s\S]*?<\/script>/gi, '');



  html = html.replace(/<a class="arrow_pag"[^>]*>.*?<\/a>/g, '');

  html = html.replace(/<img src="\/wp-content\/themes\/8filmai\/assets\/img\/flags\/lt.jpg"/g, '<img src="https://176.97.124.27/wp-content/themes/8filmai/assets/img/flags/lt.jpg"');


  html = html.replace(/<img src="\/(wp-content\/themes\/8filmai\/assets\/img\/flags\/[^"]+)"/g, (match, p1) => {
    return `<img src="https://176.97.124.27/${p1}"`;
  });

  const customMenu = `
  <div class="sgeneros hauto"><center><a href="http://8filmai.hopto.org:3500/zanrai/mistiniai/" rel="tag" data-wpel-link="internal">Mistiniai </a><a href="http://8filmai.hopto.org:3500/zanrai/siaubo/" rel="tag" data-wpel-link="internal">Siaubo </a><a href="http://8filmai.hopto.org:3500/zanrai/animaciniai/" rel="tag" data-wpel-link="internal">Animaciniai </a><a href="http://8filmai.hopto.org:3500/zanrai/fantastiniai/" rel="tag" data-wpel-link="internal">Fantastiniai </a><a href="http://8filmai.hopto.org:3500/zanrai/dramos/" rel="tag" data-wpel-link="internal">Dramos </a><a href="http://8filmai.hopto.org:3500/zanrai/komedijos/" rel="tag" data-wpel-link="internal">Komedijos </a>
  <a href="http://8filmai.hopto.org:3500/zanrai/dokumentiniai/" rel="tag" data-wpel-link="internal">Dokumentiniai </a><a href="http://8filmai.hopto.org:3500/zanrai/kriminaliniai/" rel="tag" data-wpel-link="internal">Kriminaliniai </a>
  <a href="http://8filmai.hopto.org:3500/zanrai/trileriai/" rel="tag" data-wpel-link="internal">Trileriai </a><a href="http://8filmai.hopto.org:3500/zanrai/veiksmo/" rel="tag" data-wpel-link="internal">Veiksmo </a><a href="http://8filmai.hopto.org:3500/zanrai/romantiniai/" rel="tag" data-wpel-link="internal">Romantiniai </a><a href="http://8filmai.hopto.org:3500/zanrai/nuotykiai/" rel="tag" data-wpel-link="internal">Nuotykiai </a></center></div></head>
  `;
  html = html.replace('</head>', customMenu);

  return html;
}

// Helper: Replace the search form
function replaceSearchForm(html) {
  return html.replace(
    /(<div class="headitems[^>]*>\s*<div id="advc-menu" class="search">\s*<form[^>]*method="get"[^>]*id="searchform"[^>]*action=")(https:\/\/176\.97\.124\.27)("[^>]*>)/gi,
    '$1http://8filmai.hopto.org:3500$3'
  );
}

function replaceFormAction(html) {
  return html.replace(
    /(<form[^>]*id="form-search-resp"[^>]*action=")(https:\/\/176\.97\.124\.27)/gi,
    '$1http://8filmai.hopto.org:3500'
  );
}


function replaceLogoLink(html) {
  return html.replace(
    /(<div class="logo">\s*<a\s+[^>]*href=")https:\/\/176\.97\.124\.27(")/gi,
    '$1http://8filmai.hopto.org:3500$2'
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
      content: "✅";
      color: #408bea;
      }
      .starstruck .star-off-png::before {
      content: "☑️";
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

      .icon-star2::before {
      content: "⭐";
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


      header.responsive .nav a.nav-resp::before {
      content: "🎬";
    }


    header.responsive .search a.active::before, .dtuser a.clicklogin:hover, .menuresp .menu ul.resp li a:hover, .menuresp .menu ul.resp li ul.sub-menu li a:hover {
    color: #8b0000;
    content: "🔍";
    }

    .icon-search3::before {
    content: "🔍";
    }

    header.responsive .search a.search-resp::before {
    content: "🔍";
    }
    .yellow-box {
    background-color: yellow;
     width: 100%;
    height: 20px;
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

    modifiedContent = replaceFormAction(modifiedContent);

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
