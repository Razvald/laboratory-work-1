console.log("get text")

const { promises } = require("fs");
const fs = require("fs");

async function readAndWrite() {
    let data;
    try {
        data = await promises.readFile("./input.txt", "utf8");
        console.log(data);
        const reversedData = data.split('').reverse().join('');
        await promises.writeFile("./input.txt", reversedData);
        console.log("");
    } catch(e) {
        console.error(`Что-то пошло не так: ${e.message}`);
    }
}

readAndWrite();

//========================================================================
// использовать сайт https://tools.100zona.com/postget.html

const http = require("http");

const PORT = 3000;
const HOST = "127.0.0.1";

http.createServer(async (req, res) => {
    console.log("Начало обработки запроса");

    if (req.method === "GET" && req.url === "/") {
        // Обработка GET запроса
        promises.readFile("input.txt" + req.url, "utf8", (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
            res.end(data);
        });
    } else if (req.method === "POST" && req.url === "/") {
        // Обработка POST запроса
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            promises.appendFile("input.txt", body, "utf8", (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
                res.end("Data successfully appended to file.");
            });
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
        res.end("Not Found");
    }
}).listen(PORT, HOST, () => {
    console.log(`Сервер запущен по адресу http://${HOST}:${PORT}`);
});