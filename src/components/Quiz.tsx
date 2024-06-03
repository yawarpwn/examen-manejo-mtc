import React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Quiz() {
  const [selectId, setSelectId] = useState<number | null>(null)

  const questions = [
    {
      id: 1,
      text: 'No lo sé, espero descubrirlo con este test.',
      value: 'a1',
      letter: 'A',
    },
    {
      id: 2,
      text: 'otra pregunta de prueba',
      value: 'a2',
      letter: 'B',
    },

    {
      id: 3,
      text: 'No lo sé, espero descubrirlo con este test.',
      value: 'a1',
      letter: 'C',
    },
    {
      id: 4,
      text: 'otra pregunta de prueba',
      value: 'a2',
      letter: 'D',
    },

    {
      id: 5,
      text: 'otra pregunta de prueba',
      value: 'a2',
      letter: 'E',
    },
  ]

  const handleClick = (id: number) => {
    setSelectId(id)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto h-full w-full max-w-3xl p-4 xl:max-w-7xl'
    >
      {JSON.stringify({
        selectId,
      })}
      <div className='flex h-full flex-col justify-start gap-10 xl:flex-row xl:gap-16'>
        <header className='flex flex-wrap items-center justify-center'>
          <div className='flex flex-col items-start justify-start'>
            <div className='spacing leading-6 tracking-wide text-white'>
              <span>
                {' '}
                Antes de empezar, ¿cuál crees que es tu nivel de inglés?{' '}
              </span>
            </div>
          </div>
        </header>
        <div className='flex h-full w-full flex-col items-center justify-center gap-6 xl:items-center'>
          <div className='w-full'>
            <div className='flex flex-col gap-4'>
              {questions.map((question) => {
                const checked = selectId === question.id

                return (
                  <label
                    data-state={checked ? 'checked' : 'unchecked'}
                    className={`relative flex cursor-pointer items-center overflow-hidden rounded-lg border border-zinc-500 bg-black pl-8 leading-6 data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-30`}
                  >
                    <button
                      role='radio'
                      id='radio-button'
                      className='absolute bottom-0 left-0 top-0 w-8 min-w-8 bg-[#222] text-[#fff]'
                      onClick={() => handleClick(question.id)}
                      type='button'
                      aria-checked={checked}
                      data-state='unchecked'
                      value={question.value}
                    >
                      {question.letter}
                    </button>
                    <input
                      type='radio'
                      aria-hidden='true'
                      value={question.value}
                      tabIndex={-1}
                      checked={checked}
                      className='absolute h-14 w-8 -translate-x-full opacity-100'
                    />
                    <span className='p-4'>{question.text}</span>
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
              aria-disabled={selectId == null}
              type='submit'
              disabled={selectId == null}
            >
              Siguiente
            </button>
          </div>
        </footer>
      </div>
    </form>
  )
}
