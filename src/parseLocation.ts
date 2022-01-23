export const parseLocation = (
  location: string
):
  | {
      status: 'offline'
    }
  | {
      status: 'private'
    }
  | {
      status: 'in_world'
      worldId: string
      instanceId: string
    } => {
  const [worldId, instanceId] = location.split(':')

  if (instanceId === undefined) {
    switch (worldId) {
      case '':
      case 'offline':
        return {
          status: 'offline',
        }
      case 'private':
        return {
          status: 'private',
        }
    }

    throw new Error(`Unexpected location ${location}.`)
  }

  return {
    status: 'in_world',
    worldId,
    instanceId,
  }
}
