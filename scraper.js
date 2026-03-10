const https = require('https');
const http = require('http');
const fs = require('fs');
const { URL } = require('url');

async function searchImage(query, filename) {
  const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query + ' transparent png')}`;
  return new Promise((resolve) => {
    https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/img class="image_([^"]+)" src="\/\/([^"]+)"/g)];
        if (matches.length > 0) {
            let imgUrl = 'https://' + matches[0][2];
            if (imgUrl.includes('/iu/?u=')) {
               imgUrl = decodeURIComponent(imgUrl.split('u=')[1].split('&')[0]);
            }
            console.log(`Downloading ${filename} from ${imgUrl}`);
            const client = imgUrl.startsWith('https') ? https : http;
            client.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (imgRes) => {
                if (imgRes.statusCode === 200) {
                    const file = fs.createWriteStream(filename);
                    imgRes.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        console.log(`Downloaded ${filename} successfully.`);
                        resolve();
                    });
                } else {
                    console.error(`Failed to download ${imgUrl} for ${filename}: ${imgRes.statusCode}`);
                    resolve();
                }
            }).on('error', (err) => {
                console.error(`Error downloading ${imgUrl}: ${err.message}`);
                resolve();
            });
        } else {
           console.log(`No image found for ${query}`);
           resolve();
        }
      });
    }).on('error', (err) => {
      console.error(err);
      resolve();
    });
  });
}

(async () => {
  if (!fs.existsSync('./public/images')) {
    fs.mkdirSync('./public/images', { recursive: true });
  }
  await searchImage('apricot strawberry red bull can', './public/images/apricot.png');
  await searchImage('white peach red bull can', './public/images/peach.png');
  await searchImage('coconut blueberry red bull can', './public/images/coconut.png');
  await searchImage('watermelon red bull can', './public/images/watermelon.png');
  await searchImage('tropical red bull can', './public/images/tropical.png');
})();
