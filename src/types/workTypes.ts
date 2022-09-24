export type worksListContent = {
  img: string
  title: string
  route: string
  product: string
  role: string
}

export type worksListProps = {
  worksList: worksListContent[]
}

export type workIntroduction = {
  text: string
  period: string
  usedLanguage: string
  role: string
}

export type workPageProps = {
  images: {
    path: string
    alt: string
  }[]
  workTitle: string
  introduction: workIntroduction
}
