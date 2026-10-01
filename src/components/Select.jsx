function Select({ id, options }) {
    return (
        <select id={id}>
            {options.map(option => {
                return <option key={option} value={option}>{option}</option>
            })}
        </select>
    )
}

export default Select