import React from 'react'
import { getQuestions } from '@/data/questions'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const questions = getQuestions()

const getImageUrl = (id: number) =>
  `https://sierdgtt.mtc.gob.pe/Content/img-data/img${id}.jpg`

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

export function QuizReact() {
  const [randomIndex, setRandomIndex] = useState(getRandomInt(0, 200))

  const [selectedAlternative, setSelectedAlternative] = useState<string | null>(
    null,
  )

  const question = questions[randomIndex]

  const handleClick = (key: string) => {
    setSelectedAlternative(key)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSelectedAlternative(null)
    setRandomIndex(getRandomInt(0, 200))
  }

  const alternatives = Object.entries(question.alternatives)

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto h-full w-full max-w-3xl p-4 xl:max-w-7xl'
    >
      {/* {JSON.stringify({ */}
      {/*   selectId: selectedAlternative, */}
      {/*   total: questions.length, */}
      {/* })} */}
      <div className='flex h-full flex-col justify-start gap-6 xl:flex-row xl:gap-16'>
        <header className='flex flex-col flex-wrap items-center justify-center'>
          <div className='flex flex-col items-start justify-start'>
            <div className='spacing leading-6 tracking-wide text-white'>
              <span>{question.question}</span>
            </div>
          </div>
          <div className='mt-4'>
            {question.hasImage && <img src={getImageUrl(question.id)} />}
          </div>
        </header>
        <div className='flex h-full w-full flex-col items-center justify-center gap-6 xl:items-center'>
          <div className='w-full'>
            <div className='flex flex-col gap-4'>
              {alternatives.map(([alternative, value]) => {
                const checked = selectedAlternative === alternative

                return (
                  <label
                    data-state={checked ? 'checked' : 'unchecked'}
                    key={alternative}
                    className={`relative flex cursor-pointer items-center overflow-hidden rounded-lg border border-zinc-500 bg-black pl-8 leading-6 data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-30`}
                  >
                    <button
                      role='radio'
                      id='radio-button'
                      className='absolute bottom-0 left-0 top-0 w-8 min-w-8 bg-[#222] text-[#fff]'
                      onClick={() => handleClick(alternative)}
                      type='button'
                      aria-checked={checked}
                      data-state='unchecked'
                      value={alternative}
                    >
                      {alternative}
                    </button>
                    <input
                      type='radio'
                      aria-hidden='true'
                      value={value}
                      tabIndex={-1}
                      checked={checked}
                      className='absolute h-14 w-8 -translate-x-full opacity-0'
                    />
                    <span className='p-4'>{value}</span>
                  </label>
                )
              })}
            </div>
          </div>
        </div>

        <footer className='fixed bottom-0 left-0 right-0 h-[76px]'>
          <div className='mx-auto flex h-full max-w-3xl items-center justify-end rounded-tl-lg rounded-tr-lg bg-[#1e2229] p-4'>
            <button
              className='h-full w-full cursor-pointer rounded-md bg-lime-500 px-4 py-2 text-black disabled:pointer-events-none disabled:opacity-20'
              aria-disabled={selectedAlternative == null}
              type='submit'
              disabled={selectedAlternative == null}
            >
              Siguiente
            </button>
          </div>
        </footer>
      </div>
    </form>
  )
}
