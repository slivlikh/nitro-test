import type {SelectHTMLAttributes, OptionHTMLAttributes, FC} from 'react'


type SelectProps = {
    options: Omit<OptionHTMLAttributes<HTMLOptionElement>, 'selected'>[],
    value: OptionHTMLAttributes<HTMLOptionElement>['value']
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select: FC<SelectProps> = ({options, value, ...rest}) => (
    <select value={value} {...rest}>
        {options.map(({label, ...restOption}, i) => (
            <option key={i} {...restOption}>{label}</option>
        ))}
    </select>
)