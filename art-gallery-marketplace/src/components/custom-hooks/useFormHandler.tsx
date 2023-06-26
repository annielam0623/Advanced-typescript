import { useState } from "react";

export default function useFormHandler(values: any) {
  const [inputs, setInputs] = useState(values)

  const handleChange = (e: { target: { value: any; name: any; }; }) => {
    const { value, name } = e.target
    setInputs({...inputs, [name]: value})
  }

  return { inputs, handleChange }
}