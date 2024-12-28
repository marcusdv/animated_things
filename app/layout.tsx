import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className=''>
                <div className='bg-amber-400 mb-4'>
                    <h1 className="text-center font-extrabold py-12 text-6xl text-rose-500">
                        Animate.css
                    </h1>
                </div>
                {children}
            </body>
        </html>
    );
}
