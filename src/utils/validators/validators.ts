export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined
    return "Field is required"
}

export const maxLengthCreator = (maxLength: number, minLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength ) return `Max length is ${maxLength} symbols!`
    else if(value.length < minLength) return `Min length is ${minLength} symbols!`
    return undefined
}
