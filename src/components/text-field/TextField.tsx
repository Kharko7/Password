import styles from './TextField.module.css'

interface TextFieldProps {
  value: string;
  placeholder: string
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ value, onChangeValue, placeholder }: TextFieldProps) => {

  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChangeValue}
    />
  )
}

export default TextField