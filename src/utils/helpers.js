export function mapListToObject(entities) {
  let mapping = {}
  entities.map(e => {
    mapping[e.id] = e
  })
  return mapping
}
