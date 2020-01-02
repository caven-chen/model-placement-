/*
 * @Author: Caven
 * @Date: 2018-12-15 00:33:19
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-27 17:07:10
 */
'use strict'
const path = require('path')
const webpack = require('webpack')
const cesiumBuild = './node_modules/cesium/Build/Cesium'
const CopywebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  configureWebpack: {
    amd: {
      toUrlUndefinded: true
    },
    node: {
      fs: 'empty'
    },
    module: {
      unknownContextCritical: false
    },
    performance: {
      hints: false
    }
  },
  chainWebpack: config => {
    config.resolve.extensions.add('.js').add('.vue')
    config.resolve.alias.set('cesium', path.resolve(__dirname, cesiumBuild))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'images/[name].[ext]',
        limit: 10000
      })
      .end()

    config.module
      .rule('fonts')
      .test(/\.(eot|ttf|woff|woff2)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'fonts/[name].[ext]',
        limit: 10000
      })
      .end()

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    config.plugin('copy').use(CopywebpackPlugin, [
      [
        { from: path.join(cesiumBuild, 'Workers'), to: 'resources/Workers' },
        { from: path.join(cesiumBuild, 'Assets'), to: 'resources/Assets' },
        { from: path.join(cesiumBuild, 'Widgets'), to: 'resources/Widgets' },
        { from: path.join(cesiumBuild, 'ThirdParty'), to: 'resources/ThirdParty' }
      ]
    ])
    config.plugin('define').use(webpack.DefinePlugin, [{ CESIUM_BASE_URL: JSON.stringify('./resources/') }])
  }
}
