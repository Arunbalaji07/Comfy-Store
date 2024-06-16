import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

type CheckboxProps = {
    name: string
    label?: string
    defaultValue?: string
}

const FormCheckbox = ({name, label, defaultValue}: CheckboxProps) => {
  const defaultChecked = defaultValue === 'on' ? true : false
  
    return (
    <div className='mb-2 flex justify-between self-end'>
        <Label htmlFor={name} className='capitalize'>
            {label || name}
        </Label>
        <Checkbox id={name} name={name} defaultChecked={defaultValue} />
    </div>
  )
}
export default FormCheckbox