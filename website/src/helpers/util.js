export class Util {

  static isProductionEnvironment = () => {
    return this.environment() === 'production'
  }

  static environment = () => {
    let env = 'development'
    if (process.env.NODE_ENV === 'production') {
      env = 'production'
    }
    return env
  }
}