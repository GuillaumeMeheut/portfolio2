export type ProjectProps = {
  id: number
  title: string
  type: string
  imgsUrl: string[]
}

export const data: ProjectProps[] = [
  {
    id: 1,
    title: 'Obonto',
    type: 'Prêt immobilier',
    imgsUrl: ['/assets/obonto1.jpg', '/assets/obonto1.jpg'],
  },
  {
    id: 2,
    title: 'Scorpulting',
    type: 'Agence',
    imgsUrl: ['/assets/scorpulting1.jpg'],
  },
]
