export const Input = ({
    label, 
    type, 
    name, 
    value, 
    onChange, 
    placeholder
}) => {
    return (
            <input 
                type={type} 
                label={label}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
    )
}
