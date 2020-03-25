import { useLocation } from "@reach/router"

export class Util {

  static isProductionEnvironment = () => {
    return this.environment() === 'production'
  }

  static environment = () => {
    let host = useLocation().host || ''
    let env = 'development'
    if (host.includes('www.agilebrazil.com')) {
      env = 'production'
    }
    return env
  }
}