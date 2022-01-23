export const getInstanceOwnerIdFromInstanceId = (
  instanceId: string
): string | undefined => {
  const result = instanceId.match(/(?:hidden|friends|private)\((.*?)\)/)

  if (result === null || result.length < 2) return undefined

  return result[1]
}
