export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="Hello World, I'm a Web developer. I love to work on web related stuff." />
                <meta name="keywords" content="web development, javascript, react, angular, website, freelancer, bengaluru, india" />
                <title>Manoj Singh</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Montserrat:300,400&display=swap" />
            </head>
            <body>{children}</body>
        </html>
    )
}