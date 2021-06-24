import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=G-8DK1KYYSNN`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8DK1KYYSNN', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					{/* Make Color mode to persists when you refresh the page. */}
					<noscript>
						<noscript
							dangerouslySetInnerHTML={{
								__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4ZGVP4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
							}}
						></noscript>
					</noscript>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
