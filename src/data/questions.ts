import a1Questions from '@/data/a1.json'

type Question = {
  id: number
  alternatives: {
    a: string
    b: string
    c: string
    d: string
  }
  question: string
  correctAlternative: string
  hasImage: boolean
}

const replaceMultipleSpaceWithSllipsis = (str: string) =>
  str.replace(/_/, '').replace(/\s{3,}/g, ' ________ ')
const format = (str: string) => str.slice(3, str.length)

export function getQuestions(): Question[] {
  const mappedQuestions = a1Questions.map((question) => {
    return {
      id: question.index,
      alternatives: {
        a: format(question.alternativa_a),
        b: format(question.alternativa_b),
        c: format(question.alternativa_c),
        d: format(question.alternativa_d),
      },
      question: replaceMultipleSpaceWithSllipsis(question.pregunta),
      correctAlternative: question.respuesta,
      hasImage: Boolean(question.image),
    }
  })

  return mappedQuestions
}
