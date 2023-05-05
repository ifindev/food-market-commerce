import React from 'react'
import renderer from 'react-test-renderer'
import Text from './Text.atom'

describe('Text Atom Component', () => {
  it('should render HeadingOne correctly', () => {
    const tree = renderer.create(<Text.HeadingOne>Hello</Text.HeadingOne>)
    expect(tree).toMatchSnapshot()
  })

  it('should render HeadingTwo correctly', () => {
    const tree = renderer.create(<Text.HeadingTwo>Hello</Text.HeadingTwo>)
    expect(tree).toMatchSnapshot()
  })

  it('should render HeadingThree correctly', () => {
    const tree = renderer.create(<Text.HeadingTwo>Hello</Text.HeadingTwo>)
    expect(tree).toMatchSnapshot()
  })

  it('should render Body20 correctly', () => {
    const tree = renderer.create(<Text.Body20>Hello</Text.Body20>)
    expect(tree).toMatchSnapshot()
  })

  it('should render Body18 correctly', () => {
    const tree = renderer.create(<Text>Hello</Text>)
    expect(tree).toMatchSnapshot()
  })

  it('should render Body16 correctly', () => {
    const tree = renderer.create(<Text.Body16>Hello</Text.Body16>)
    expect(tree).toMatchSnapshot()
  })

  it('should render Body14 correctly', () => {
    const tree = renderer.create(<Text.Body14>Hello</Text.Body14>)
    expect(tree).toMatchSnapshot()
  })

  it('should render Body13 correctly', () => {
    const tree = renderer.create(<Text.Body13>Hello</Text.Body13>)
    expect(tree).toMatchSnapshot()
  })

  it('should render Body12 correctly', () => {
    const tree = renderer.create(<Text.Body13>Hello</Text.Body13>)
    expect(tree).toMatchSnapshot()
  })
})
