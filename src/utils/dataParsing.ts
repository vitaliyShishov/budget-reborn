const extractSectionBlocks = (sectionBlocks: any) => {
  return Object.keys(sectionBlocks)
    .filter(objKey => Boolean(sectionBlocks[objKey]))
    .reduce((acc, objKey) => {
      switch (objKey) {
        case 'image':
          acc = [
            ...acc,
            ...sectionBlocks[objKey].map(({ id, sortOrder, source }: any) => ({
              id,
              sortOrder,
              componentType: objKey,
              source: source.data.attributes.url,
              altText: source.data.attributes.alternativeText
            }))
          ]
          break
        case 'list':
          acc = [
            ...acc,
            ...sectionBlocks[objKey].map(({ id, sortOrder, type, list }: any) => ({
              id,
              sortOrder,
              type,
              componentType: objKey,
              items: list.data.attributes.listitem
            }))
          ]
          break
        default:
          acc = [
            ...acc,
            ...sectionBlocks[objKey].map((element: any) => ({
              ...element,
              componentType: objKey
            }))
          ]
      }

      return acc
    }, [] as any)
    .sort((a: any, b: any) => a.sortOrder - b.sortOrder)
}

export const parseComponents = (collectionTypesData: any) => {
  const {
    attributes: { section, ...rest }
  } = collectionTypesData

  const result = { ...rest, components: [] }

  result.components = section.map(
    ({ id, component, sectionBackground, ...rest }: any) => ({
      id,
      sectionBackground,
      blocks: extractSectionBlocks(rest)
    })
  )

  return result
}
