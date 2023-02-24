import { regExp } from "constants/regExp";

export enum PasswordStrength {
  Medium = 'medium',
  Strong = 'strong',
  Initial = 'initial',
  Easy = 'easy',
}

export const getSectionsClass = (value: string) => {
  const { includesLetters, includesDigits, includesSymbols } = regExp
  const classSection: Record<string, string> = {
    section1: PasswordStrength.Initial,
    section2: PasswordStrength.Initial,
    section3: PasswordStrength.Initial,
  }
  let passwordStrengthLevel: number = 0;

  if (includesLetters.test(value)) passwordStrengthLevel++
  if (includesDigits.test(value)) passwordStrengthLevel++
  if (includesSymbols.test(value)) passwordStrengthLevel++

  if (value.length > 0 && value.length < 8) {
    classSection.section1 = PasswordStrength.Easy;
    classSection.section2 = PasswordStrength.Easy;
    classSection.section3 = PasswordStrength.Easy;
  } else {
    switch (passwordStrengthLevel) {
      case 0:
        classSection.section1 = PasswordStrength.Initial;
        classSection.section2 = PasswordStrength.Initial;
        classSection.section3 = PasswordStrength.Initial;
        break;
      case 1:
        classSection.section1 = PasswordStrength.Easy;
        classSection.section2 = PasswordStrength.Initial;
        classSection.section3 = PasswordStrength.Initial;
        break;
      case 2:
        classSection.section1 = PasswordStrength.Medium;
        classSection.section2 = PasswordStrength.Medium;
        classSection.section3 = PasswordStrength.Initial;
        break;
      case 3:
        classSection.section1 = PasswordStrength.Strong;
        classSection.section2 = PasswordStrength.Strong;
        classSection.section3 = PasswordStrength.Strong;
    }
  }

  return classSection
}
