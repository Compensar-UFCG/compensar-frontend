export const getLittleDescription = (description: string) => {
  if(description.length > 155) return `${description.slice(0,155)}...`
  else return description
}
