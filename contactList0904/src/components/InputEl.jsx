export default function InputEl({ inputName, inputId, value, onChange }) {
	return (
		<>
			<label htmlFor={inputId}>{inputName}</label>
			<input
				id={inputId}
				name={inputId}
				type="text"
				placeholder={inputName}
				value={value}
				onChange={onChange}
			/>
		</>
	);
}
