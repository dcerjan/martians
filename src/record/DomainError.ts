export class DomainError extends Error {
  constructor (message: string) {
    super(`[DomainError] ${message}`)

    Object.setPrototypeOf(this, DomainError.prototype);
  }
}
