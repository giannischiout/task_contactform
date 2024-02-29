export const TextArea = ({
    label, 
    placeholder, 
    rows, 
    onChange,
    name,
    value
}) => {
    return (
        <div className="text-area">
            <label htmlFor="">{label}</label>
            <textarea 
                value={value}
                name={name}
                cols="40" 
                onChange={onChange}
                rows={rows} 
                placeholder={placeholder}
                ></textarea>
        </div>
    )
}