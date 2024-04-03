import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // viewport: 'width=1366, initial-scale=0.1, maximum-scale=1', // <-- here
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script
        dangerouslySetInnerHTML={{
          __html : `
        (function(apiKey){
            (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
            v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
                o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
                y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
                z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
          })('411dd8e5-8dba-487a-6d04-938013cd90d3');

          pendo.initialize({
            visitor: {
              id: new Date().getTime(),
              device: window.navigator.userAgent,
              platform : window.navigator.platform,
              language: window.navigator.language,
              cookieEnabled: window.navigator.cookieEnabled,
              screenResolution: window.screen.width + 'x' + window.screen.height,
              screenViewed: window.screen.width + 'x' + window.screen.height,
              colorDepth: window.screen.colorDepth,
              onLine: window.navigator.onLine,
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              browser: window.navigator.userAgent,
              mediaDevices: window.navigator.mediaDevices,
              history: window.history.length,
              location: window.location.href,
              referrer: document.referrer,
              hardwareConcurrency: window.navigator.hardwareConcurrency,
            }, 

            account: {
              id: 'deployed',
              accountName: 'deployed',
            }
          });

          `
        }}
        />
        <title>Sourabh - Srvraj311 :Portfolio</title>
        <meta name="description" content="Results-oriented Software Engineer at Persistent Systems, specializing in Full Stack Web Development and Android Development. Proven track record as a pivotal UI (Angular) Developer for cutting-edge healthcare software projects. Contributed significantly to the success of Survey Designing and Delivering software. Recognized with Top Talent Recognition in FY23 for exceptional technical work on the Healthcare Optimization Platform. Adept at problem-solving, I thrive in dynamic environments, delivering high-quality solutions through collaboration and innovation. Seeking opportunities to leverage my skills in creating intuitive real-life applications and further excel in software development."/>
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
