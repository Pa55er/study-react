import List from "../components/List";
import SearchCon from "../components/SearchCon";

export default function ListArea({
	contactList,
	deleteContact,
	openDetailModal,
	onSearch,
}) {
	return (
		<section className="listArea">
			<SearchCon onSearch={onSearch} />
			<ul className="listCon">
				{contactList.map((data, i) => (
					<List
						data={data}
						key={i}
						onDelete={() => deleteContact(data)}
						onOpenDetail={() => openDetailModal(data)}
					/>
				))}
			</ul>
		</section>
	);
}
