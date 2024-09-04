export default function SelectEl({
	inputName,
	selectId,
	value,
	onChange,
	options,
}) {
	return (
		<>
			<label htmlFor={selectId}>{inputName}</label>
			<select
				id={selectId}
				name={selectId}
				value={value}
				onChange={onChange}
			>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
}
