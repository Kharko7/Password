import { PasswordStrength, getSectionsClass } from "./get-sections-class"

describe('getSectionsClass', () => {
  test('should return initial color for all sections when value is empty', () => {
    expect(getSectionsClass('')).toEqual({
      section1: PasswordStrength.Initial,
      section2: PasswordStrength.Initial,
      section3: PasswordStrength.Initial,
    })
  })

  test('should return easy color for all sections when value length is less than 8', () => {
    expect(getSectionsClass('short')).toEqual({
      section1: PasswordStrength.Easy,
      section2: PasswordStrength.Easy,
      section3: PasswordStrength.Easy,
    })
  })

  test('should return easy color for section1 and initial for other sections when password strength level is 1', () => {
    expect(getSectionsClass('password')).toEqual({
      section1: PasswordStrength.Easy,
      section2: PasswordStrength.Initial,
      section3: PasswordStrength.Initial,
    })
  })

  test('should return medium color for section1 and section2, and initial for section3 when password strength level is 2', () => {
    expect(getSectionsClass('password12')).toEqual({
      section1: PasswordStrength.Medium,
      section2: PasswordStrength.Medium,
      section3: PasswordStrength.Initial,
    })
  })

  test('should return strong color for all sections when password strength level is 3', () => {
    expect(getSectionsClass('password123!')).toEqual({
      section1: PasswordStrength.Strong,
      section2: PasswordStrength.Strong,
      section3: PasswordStrength.Strong,
    })
  })
})