const express = require("express");
const path = require("path");

const app = express();
process.loadEnvFile();
const PORT = process.env.PORT;

// Servir archivos estáticos desde la carpeta 'src/public'
app.use(express.static(path.join(__dirname, "../public")));

// Ruta principal para servir 'index.html'
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
