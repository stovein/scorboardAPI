let envCache = {};

function getEnv(key) {
    if (envCache[key]) {
        return envCache[key];
    }

    const value = process.env[key];
    if (value) {
        envCache[key] = value;
        return value;
    } else {
        throw new Error(`${key}, .env dosyasında bulunmamakta.`);
    }
}


module.exports = getEnv;