const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

export class Util {

  static isProductionEnvironment = () => {
    return true // this.environment() === 'production'
  }

  static environment = () => {
    let env = 'development'
    if (activeEnv === 'production') {
      env = 'production'
    }
    return env
  }

}