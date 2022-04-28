import { FC } from 'react'

import {  WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import moduleName from './Input.module.css'

export const Input = (props: any) => {
    const { meta, input, child, ...restProps } = props
    return <FormControl {...props} > <input {...input} {...restProps} /> </FormControl >
}

export const Textarea = (props: WrappedFieldProps) => {
    const { meta, input, ...restProps } = props
    return <FormControl {...props} > <textarea {...input} {...restProps} /></FormControl >
}

// type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

// export function createField<FormKeysType extends string>(
//     name: FormKeysType | undefined,
//     type: string | null,
//     component: FC<WrappedFieldProps> | string,
//     validate: Array<FieldValidatorType> | undefined,
//     props = {}, text = "" as string | null) {
//     return <div>
//         <Field name={name} type={type} component={component} validate={validate} {...props} />
//         {text}
//     </div>
// }

type FormControlParamsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: FC<FormControlParamsType> = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div className={(hasError ? moduleName.Input : "")}>
            {children}
            {hasError && <span className={moduleName.span}> {error} </span>}
        </div>
    )
}