import { getInstanceOwnerIdFromInstanceId } from './getInstanceOwnerIdFromInstanceId'

describe('getInstanceOwnerIdFromInstanceId', () => {
  const testCases = [
    {
      instanceId:
        '24525~hidden(usr_example)~region(us)~nonce(fc20aff1-ea47-4986-b74c-afcfaac43585)',
      expect: 'usr_example',
    },
    {
      instanceId:
        '62617~friends(usr_example)~region(us)~nonce(3e8aacf0-7442-43c4-81b4-771d6ef45912)',
      expect: 'usr_example',
    },
    {
      instanceId:
        '46612~private(usr_example)~canRequestInvite~region(us)~nonce(ad8bb593-95db-419c-b821-bfb7f6235b54)',
      expect: 'usr_example',
    },
    {
      instanceId:
        '99663~private(usr_example)~region(us)~nonce(4565970b-8d36-4c1a-9836-4e795574e578)',
      expect: 'usr_example',
    },
    {
      instanceId: '34280~region(us)',
      expect: undefined,
    },
  ]
  it('期待通りの結果が返却される', () => {
    testCases.forEach((testCase) => {
      const result = getInstanceOwnerIdFromInstanceId(testCase.instanceId)

      expect(result).toBe(testCase.expect)
    })
  })
})
