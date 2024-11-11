import app from './app';
import config from './config/envConfig';

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
