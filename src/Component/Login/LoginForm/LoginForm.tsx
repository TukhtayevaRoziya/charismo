import { Field, reduxForm } from 'redux-form'

import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Input } from '../../../formControl/Text'
import moduleName from './LoginForm.module.css'

export let maxLength20 = maxLengthCreator(20)

 const LoginForm = (props: any) => {
  return (
    <form className={moduleName.form} onSubmit={props.handleSubmit}>
      <Field validate={[required, maxLength20]} placeholder='Name*' name={'name'} component={Input} />
      <Field validate={[required]} placeholder='Email*' name={'email'} component={Input} />
      <Field validate={[required, maxLength20]} placeholder='Parol*' name={'parol'} component={Input} />
      <div className={moduleName.inp_text}><Field type="checkbox" name={'check'} component={Input} />Remember me</div>
      <Field validate={[required, maxLength20]} placeholder='Age*' name={'age'} component={Input} />
      <button className={moduleName.btn}> Login </button>
    </form>
  )
}

export const LoginReduxForm: any = reduxForm({ form: 'login' })(LoginForm)
