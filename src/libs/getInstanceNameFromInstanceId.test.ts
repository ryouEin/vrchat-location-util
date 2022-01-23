import { getInstanceNameFromInstanceId } from './getInstanceNameFromInstanceId'

describe('getInstanceNameFromInstanceId', () => {
  it('"34280~region(us)"の場合は34280が返却される', () => {
    const result = getInstanceNameFromInstanceId('34280~region(us)')

    expect(result).toBe('34280')
  })

  it('"34280"の場合は34280が返却される', () => {
    const result = getInstanceNameFromInstanceId('34280')

    expect(result).toBe('34280')
  })
})
