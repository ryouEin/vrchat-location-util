export const getInstanceRegionFromInstanceId = (
  instanceId: string
): string | undefined => {
  const result = instanceId.match(/region\((.*?)\)/)

  if (result === null || result.length < 2) return undefined

  return result[1]
}
