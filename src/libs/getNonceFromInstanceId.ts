export const getNonceFromInstanceId = (
  instanceId: string
): string | undefined => {
  const result = instanceId.match(/nonce\((.*?)\)/)

  if (result === null || result.length < 2) return undefined

  return result[1]
}
