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
						src={`https://www.googletagmanager.com/gtag/js?id=G-JSP4YKH5DG`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JSP4YKH5DG', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					{/* Make Color mode to persists when you refresh the page. */}

					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
