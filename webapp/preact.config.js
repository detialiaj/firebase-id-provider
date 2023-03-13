/**
 * @param {import('preact-cli').Config} config - Original webpack config
 * @param {import('preact-cli').Env} env - Current environment info
 * @param {import('preact-cli').Helpers} helpers - Object with useful helpers for working with the webpack config
 */
export default (config, env, helpers) => {
    const { pkg } = env;
    const envList = pkg.env[env.isProd ? 'prod' : 'dev'];
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
    Object.keys(envList).forEach(key => {
        plugin.definitions[`process.env.${key}`] = JSON.stringify(envList[key]);
    })
}