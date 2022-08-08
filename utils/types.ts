import { StaticImageData } from 'next/image'

type ImgsDetail = {
  img: string | StaticImageData
  caption: string
  desc?: string
}

export type ProjectProps = {
  id: number
  viewColor: string
  title: string
  imgIntro: string | StaticImageData
  linkWebsite?: string
  linkGithub?: string
  stacks: string[]
  intro: string
  imgs: ImgsDetail[]
}
