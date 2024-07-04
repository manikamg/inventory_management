class PUBLIC_DATA {
    static port = process.env.PORT || 8080;
    static mongo_db = process.env.MONGO_DB || "mongodb://localhost/inventory"
    static mongo_uri = process.env.MONGO_URI || "mongodb://localhost/inventory"
    
}

module.exports = {
    PUBLIC_DATA
}