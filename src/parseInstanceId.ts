import { getInstanceNameFromInstanceId } from './libs/getInstanceNameFromInstanceId'
import { getInstanceOwnerIdFromInstanceId } from './libs/getInstanceOwnerIdFromInstanceId'
import { getInstanceRegionFromInstanceId } from './libs/getInstanceRegionFromInstanceId'
import { getInstanceTypeFromInstanceId } from './libs/getInstanceTypeFromInstanceId'
import { getNonceFromInstanceId } from './libs/getNonceFromInstanceId'
import { InstanceType } from './types'

/* TODO
 * インスタンスIDの正当性までチェックするかが悩みどころ
 * 例えば、`1234~region(jp)~region(us)`みたいにリージョンが２つあったり、
 * `1234~region(jp)~fugafuga(gooo)` みたいに、`fugafuga(****)` のようなわけのわからんものがあった際にどうするかが難しい
 */
export const parseInstanceId = (
  instanceId: string
): {
  id: string
  name: string
  type: InstanceType
  nonce?: string
  region?: string
  ownerId?: string
} => {
  return {
    id: instanceId,
    name: getInstanceNameFromInstanceId(instanceId),
    type: getInstanceTypeFromInstanceId(instanceId),
    nonce: getNonceFromInstanceId(instanceId),
    region: getInstanceRegionFromInstanceId(instanceId),
    ownerId: getInstanceOwnerIdFromInstanceId(instanceId),
  }
}
