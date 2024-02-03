// A handy way to bypass my strict eslint rules
export class Logger {
  private readonly canLog = process.env.NODE_ENV !== "production"
  private scope: string | undefined

  constructor(scope?: string) {
    this.scope = scope
  }

  static create(scope?: string) {
    return new Logger(scope)
  }

  error = (...args: ArgsType) => {
    this.logScope()

    if (this.canLog) {
      // eslint-disable-next-line no-console
      console.info(...args)
    }
  }

  log = (...args: ArgsType) => {
    this.logScope()

    if (this.canLog) {
      // eslint-disable-next-line no-console
      console.info(...args)
    }
  }

  warn = (...args: ArgsType) => {
    this.logScope()

    if (this.canLog) {
      // eslint-disable-next-line no-console
      console.warn(...args)
    }
  }

  private logScope = () => {
    if (this.scope) {
      // eslint-disable-next-line no-console
      console.info(this.scope)
    }
  }
}

const defaultLogger = Logger.create()

export default defaultLogger
