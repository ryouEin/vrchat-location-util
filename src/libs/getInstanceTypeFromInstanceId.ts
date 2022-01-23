import { InstanceType } from '../types'

export const getInstanceTypeFromInstanceId = (
  instanceId: string
): InstanceType => {
  if (instanceId.includes('hidden')) {
    return 'friends_plus'
  }

  if (instanceId.includes('friends')) {
    return 'friends'
  }

  if (instanceId.includes('private')) {
    return instanceId.includes('canRequestInvite') ? 'invite_plus' : 'invite'
  }

  return 'public'
}
