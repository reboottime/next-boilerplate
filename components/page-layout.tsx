import Head from 'next/head';
import 'styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Define style link or script you would like have for all pages here, for example, ga track */}
      </Head>
      <body className="flex flex-col">
        <PageHeader />
        <main className="flex-1">{children}</main>
        <PageFooter />
      </body>
    </html>
  );
}

const PageHeader = () => {
  return <header></header>;
};

const PageFooter = () => {
  return <footer></footer>;
};
