import { getNonceFromInstanceId } from './getNonceFromInstanceId'

describe('getNonceFromInstanceId', () => {
  const testCases = [
    {
      instanceId:
        '24525~hidden(usr_example)~region(us)~nonce(fc20aff1-ea47-4986-b74c-afcfaac43585)',
      expect: 'fc20aff1-ea47-4986-b74c-afcfaac43585',
    },
    {
      instanceId: '34280~region(us)',
      expect: undefined,
    },
  ]
  it('期待通りの結果が返却される', () => {
    testCases.forEach((testCase) => {
      const result = getNonceFromInstanceId(testCase.instanceId)

      expect(result).toBe(testCase.expect)
    })
  })
})
