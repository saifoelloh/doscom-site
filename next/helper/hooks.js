import { useState } from "react"

const useFormInput = (initialState = {}) => {
  const [value, setValue] = useState(initialState)
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]:
        event.target.type === "chechbox"
          ? event.target.checked
          : event.target.value,
    })
  }

  return { value, handleChange }
}

export { useFormInput }
