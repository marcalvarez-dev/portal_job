function Select({ id, name, options }) {
    return (
        <select id={id} name={name}>
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                )
            })}
        </select>
    )
}

export default Select