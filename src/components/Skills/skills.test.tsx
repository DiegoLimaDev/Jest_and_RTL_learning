import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";
import { expect } from "vitest";

describe('Skills test', () => {
  const skills = ['html', 'css', 'js', 'c#']

  test('renders correctly', () => {
    render(<Skills skills={skills}/>)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills}/>)
    const listItemElement = screen.getAllByRole('listitem')
    expect(listItemElement).toHaveLength(skills.length)
  });

  test('renders login btn',()=> {
    render(<Skills skills={skills}/>)
    const loginbutton = screen.getByRole('button', {
      name: 'Login'
    })
    expect(loginbutton).toBeInTheDocument()
  })

  test('start is not rendered', () => {
    render(<Skills skills={skills}/>)
    const startButton = screen.queryByRole('button', {
      name: 'Start'
    })
    expect(startButton).not.toBeInTheDocument();
   })

   test('start button is at some point displayed', async ()=>{
    render(<Skills skills={skills}/>)
    const start = await screen.findByRole('button', {
      name: 'Start'
    },
    {timeout: 2000}
    )
    expect(start).toBeInTheDocument()
   })
})
