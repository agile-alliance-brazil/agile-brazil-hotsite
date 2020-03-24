export class Util {

  static isProductionEnvironment = () => {
    return this.environment() === 'production'
  }

  static environment = () => {
    let host = window.location.href
    let env = 'development'
    if ('staging.agilebrazil.com'.includes(host)) {
      env = 'staging'
    } else if ('agilebrazil.com'.includes(host)) {
      env = 'production'
    }
    return env
  }
}