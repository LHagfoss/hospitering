export const sampleCodeHTML = ` 
    <!DOCTYPE html> 
    <html lang="en">
        <head> 
            <meta charset="UTF-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
            <title>Document</title> 
        </head> 
        
        <body> 
            <h1>Hello, world!</h1> 
            <img src="./bilde1.jpg" alt="Dette er et bilde" />
        </body> 
    </html> 
`;

export const sampleCodeJSX = ` 
    return (
        <>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden font-[--font-geist-mono]">
                <Navbar />
                <div className="flex flex-col">
                <h1 className="text-9xl">Utvilking</h1>
                <h2 className="text-5xl">på IT VG2</h2>
                </div>
            </div>
            <div className="container h-[100vh] mx-auto p-4">
                <CodeBlock code={sampleCodeHTML} language="html" />
            </div>
            <div className="container h-[100vh] mx-auto p-4">
                <CodeBlock code={sampleCodeTS} language="html" />
            </div>
            <Footer />
        </>
    );
`;

export const sampleCodeDockerfile = `
    FROM node:20-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm run build
    RUN npm install -g serve
    CMD ["serve", "-s", "build"]
    EXPOSE 3000
`;