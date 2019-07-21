export class DomainError extends Error {
  constructor (public readonly originalMessage: string) {
    super(`[DomainError] ${originalMessage}`)

    Object.setPrototypeOf(this, DomainError.prototype);
  }
}
