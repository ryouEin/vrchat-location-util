export const getInstanceNameFromInstanceId = (instanceId: string): string => {
  return instanceId.split('~')[0]
}
