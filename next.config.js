module.exports = {
    serverRuntimeConfig: {
        secret: 'uJSNTOn5bEukw0KQBLIDvQ'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}