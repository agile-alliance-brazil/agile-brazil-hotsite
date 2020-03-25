import { useLocation } from "@reach/router"

export class Util {

  static isProductionEnvironment = () => {
    return this.environment() === 'production'
  }

  static environment = () => {
    let host = useLocation().href || ''
    let env = 'development'
    if (host.includes('staging.agilebrazil.com')) {
      env = 'staging'
    } else if (host.includes('agilebrazil.com')) {
      env = 'production'
    }
    return env
  }
}