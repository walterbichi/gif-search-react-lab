import { useState, type ChangeEvent, type FormEvent } from "react";

type Props = {
  onNewCategory: (value: string) => void;
};

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setinputValue] = useState<string>('');
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setinputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}
