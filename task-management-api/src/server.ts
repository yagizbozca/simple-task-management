import app from './app';
import config from './config/envConfig';

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

/* To shut down the container and the application in docker gracefully */
const shutdown = () => {
    console.log("Shutting down gracefully...");
    app.close(() => {
        console.log("Application server closed");
        process.exit(0);
    });
};

process.on("SIGTERM", shutdown);
