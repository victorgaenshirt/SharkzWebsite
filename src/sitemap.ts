import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';

// Define the type for each link object
interface Link {
    url: string;
    changefreq: string;
    priority: number;
}

// An array with your links
const links: Link[] = [
    { url: '', changefreq: 'daily', priority: 1.0 },
    { url: '/business', changefreq: 'daily', priority: 0.9 },
    { url: '/hochzeiten', changefreq: 'daily', priority: 0.8 },
    { url: '/produkte', changefreq: 'daily', priority: 0.8 },
    { url: '/socialmedia', changefreq: 'daily', priority: 0.8 },
    { url: '/workshop', changefreq: 'daily', priority: 0.8 },
    { url: '/musikvideo', changefreq: 'daily', priority: 0.8 },
    { url: '/workflow', changefreq: 'daily', priority: 0.3 },
    { url: '/impressum', changefreq: 'daily', priority: 0.1 },
    { url: '/pakete', changefreq: 'daily', priority: 0.5 },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://sharkzmedia.de' });

// Convert the array of link objects to a readable stream
const readableStream = Readable.from(links);

// Return a promise that resolves with your XML string
streamToPromise(readableStream.pipe(stream)).then((data: Buffer) => {
    const sitemapXML = data.toString();

    // Write sitemap to public directory
    fs.writeFileSync('../public/sitemap.xml', sitemapXML);

    // Update robots.txt file
    const robotsTxt = `Sitemap: https://sharkzmedia.de/sitemap.xml`;
    fs.writeFileSync('../public/robots.txt', robotsTxt);

    console.log('Sitemap and robots.txt updated successfully.');
}).catch(error => {
    console.error('Error generating sitemap:', error);
});