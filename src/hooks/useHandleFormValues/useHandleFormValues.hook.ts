import { useCallback, useState } from 'react'

export default function useHandleFormValues<TParams extends object>(
  initialValues: TParams
) {
  const [formValues, setFormValues] = useState<TParams>(initialValues)
  const [currentFocus, setCurrentFocus] = useState<keyof typeof formValues>()

  const resetFocus = useCallback(() => setCurrentFocus(undefined), [])

  const handleChangeFocus = useCallback((field: keyof typeof formValues) => {
    setCurrentFocus(field)
  }, [])

  const handleInputChange = useCallback(
    (field: keyof typeof formValues, value: string) => {
      setFormValues((prev) => ({
        ...prev,
        [field]: value
      }))
    },
    []
  )

  return {
    formValues,
    currentFocus,
    resetFocus,
    handleChangeFocus,
    handleInputChange
  }
}
