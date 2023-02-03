module.exports = {
    url: `mongodb://${process.env.MONGO_DB_USR}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_HOST}:${ process.env.MONGO_DB_PORT || '27017' }/${process.env.MONGO_DB_NAME}`,
} 