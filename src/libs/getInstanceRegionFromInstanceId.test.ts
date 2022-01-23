import { getInstanceRegionFromInstanceId } from './getInstanceRegionFromInstanceId'

describe('getInstanceRegionFromInstanceId', () => {
  const testCases = [
    {
      instanceId:
        '24525~hidden(usr_example)~region(us)~nonce(fc20aff1-ea47-4986-b74c-afcfaac43585)',
      expect: 'us',
    },
    {
      instanceId:
        '24525~hidden(usr_example)~region(jp)~nonce(fc20aff1-ea47-4986-b74c-afcfaac43585)',
      expect: 'jp',
    },
    {
      instanceId:
        '24525~hidden(usr_example)~nonce(fc20aff1-ea47-4986-b74c-afcfaac43585)',
      expect: undefined,
    },
    {
      instanceId: '34280~region(us)',
      expect: 'us',
    },
  ]

  it('期待通りのリージョンが返却される', () => {
    testCases.forEach((testCase) => {
      const result = getInstanceRegionFromInstanceId(testCase.instanceId)

      expect(result).toBe(testCase.expect)
    })
  })
})
