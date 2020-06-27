/* Pour configurer le build de l'app dans le dossier client-build */

module.exports = {
    productionSourceMap: false,
    devServer:{
        /* Pour accéder au serveur */
        proxy: "http://localhost:3000"
    },
    outputDir: '../client-build'
};