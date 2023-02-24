import { useState } from "react";
import classNames from 'classnames/bind';

import TextField from "components/text-field/TextField";
import styles from './Password.module.css'
import { PasswordStrength, getSectionsClass } from "utils/get-sections-class";

const cn = classNames.bind(styles)

const Password = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [classSections, setClassSections] = useState<Record<string, string>>({
    section1: PasswordStrength.Initial,
    section2: PasswordStrength.Initial,
    section3: PasswordStrength.Initial,
  });

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setClassSections(getSectionsClass(value))
    setInputValue(value)
  }
  return (
    <div className={cn('paper')} >
      <div className={cn('passwordBody')} >
        <div className={cn('fieldContainer')}>
          <TextField
            value={inputValue}
            onChangeValue={handleChangeValue}
            placeholder='Password'
          />
          <div className={cn('sectionsBody')}>
            {Object.entries(classSections).map(([key, section]) => (
              <span key={key} className={cn(['section', section])} />
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Password