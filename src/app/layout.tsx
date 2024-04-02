import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  viewport: 'width=1366, initial-scale=0.1, maximum-scale=1', // <-- here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sourabh - Srvraj311 :Portfolio</title>
        <meta name="description" content="Results-oriented Software Engineer at Persistent Systems, specializing in Full Stack Web Development and Android Development. Proven track record as a pivotal UI (Angular) Developer for cutting-edge healthcare software projects. Contributed significantly to the success of Survey Designing and Delivering software. Recognized with Top Talent Recognition in FY23 for exceptional technical work on the Healthcare Optimization Platform. Adept at problem-solving, I thrive in dynamic environments, delivering high-quality solutions through collaboration and innovation. Seeking opportunities to leverage my skills in creating intuitive real-life applications and further excel in software development."/>
        {/* <meta name="viewport" content="width=1366 initial-scale=0.1"></meta> */}
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
