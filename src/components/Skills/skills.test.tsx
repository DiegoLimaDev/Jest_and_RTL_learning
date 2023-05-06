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
  })
})
