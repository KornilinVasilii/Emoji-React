export function DoubleDelet(data) { 

  return data.map((elem) => ({ ...elem, keywords: 
    [...new Set(elem.keywords.split(' '))].join(' ')}))

}