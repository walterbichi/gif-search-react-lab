import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

function App() {
  const [categories, setcategories] = useState<string[]>([]);
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Category Manager</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default App
