const slashesRegExp = /\/{2,}/g

export const concatPath = (...parts) => {
  const [firstPart, ...partsRest] = [...parts]

  const path = partsRest.reduce((memo, part) => memo + (part === '/' ? '' : `/${part}`), firstPart)

  return path.replace(slashesRegExp, '/')
}
