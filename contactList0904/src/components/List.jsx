export default function List({ data, onDelete, onOpenDetail }) {
	const { name, phone, group } = data;

	return (
		<li>
			<p>
				<span>{name}</span>
				<span>{phone}</span>
				<span>{group}</span>
			</p>
			<button className="btnDetail" onClick={onOpenDetail}>
				세부사항
			</button>
			<button className="btnDelete" onClick={onDelete}>
				삭제
			</button>
		</li>
	);
}
