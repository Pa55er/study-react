import { useState, useEffect } from "react";
import "./css/App.css";
import InputCon from "./section/InputCon";
import ListArea from "./section/ListArea";
import GroupModal from "./components/GroupModal";
import DetailModal from "./components/DetailModal";

function App() {
	// localStorage에서 데이터 불러오기
	const savedContactList =
		JSON.parse(localStorage.getItem("contactList")) || [];
	const savedGroups = JSON.parse(localStorage.getItem("groups")) || [
		"가족",
		"친구",
		"직장",
	];

	// 연락처 목록 상태 (localStorage에서 초기화)
	const [contactList, setContactList] = useState(savedContactList);

	// 그룹 목록 상태 (localStorage에서 초기화)
	const [groups, setGroups] = useState(savedGroups);

	// localStorage에 데이터 저장
	useEffect(() => {
		localStorage.setItem("contactList", JSON.stringify(contactList));
		localStorage.setItem("groups", JSON.stringify(groups));
	}, [contactList, groups]);

	// 필터링된 연락처 목록 상태
	const [filteredList, setFilteredList] = useState([]);

	// 모달 상태 관리
	const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

	// 선택된 연락처 상태
	const [selectedContact, setSelectedContact] = useState(null);

	// 연락처 검색 함수
	const handleSearch = (searchTerm) => {
		const filtered = contactList.filter(
			(contact) =>
				contact.name.includes(searchTerm) ||
				contact.phone.includes(searchTerm) ||
				contact.group.includes(searchTerm)
		);
		setFilteredList(filtered);
	};

	// 연락처 추가 함수
	const addContact = (newContact) => {
		if (contactList.some((contact) => contact.name === newContact.name)) {
			return false;
		}
		const updatedList = [newContact, ...contactList];
		setContactList(updatedList);
		setFilteredList(updatedList);
		return true;
	};

	// 연락처 삭제 함수
	const deleteContact = (contactToDelete) => {
		const updatedList = contactList.filter(
			(contact) => contact.id !== contactToDelete.id
		);
		setContactList(updatedList);
		setFilteredList(updatedList);
	};

	// 그룹 추가 함수
	const addGroup = (newGroup) => {
		if (!groups.includes(newGroup)) {
			setGroups([...groups, newGroup]);
		}
	};

	// 그룹 삭제 가능 여부 확인 함수
	const isGroupDeletable = (group) => {
		return !contactList.some((contact) => contact.group === group);
	};

	// 그룹 삭제 함수
	const deleteGroup = (groupToDelete) => {
		if (!isGroupDeletable(groupToDelete)) {
			return {
				success: false,
				message: "이 그룹은 현재 사용 중이어서 삭제할 수 없습니다.",
			};
		}
		setGroups(groups.filter((group) => group !== groupToDelete));
		return { success: true };
	};

	// 연락처 수정 함수
	const updateContact = (updatedContact) => {
		const updatedList = contactList.map((contact) =>
			contact.id === updatedContact.id ? updatedContact : contact
		);
		setContactList(updatedList);
		setFilteredList(updatedList);
		setSelectedContact(updatedContact);
	};

	// 상세 모달 열기 함수
	const openDetailModal = (contact) => {
		setSelectedContact(contact);
		setIsDetailModalOpen(true);
	};

	return (
		<main className="main">
			<h1>연락처 리스트</h1>
			<InputCon
				contactList={contactList}
				groups={groups}
				addContact={addContact}
				openModal={() => setIsGroupModalOpen(true)}
			/>
			<ListArea
				contactList={
					filteredList.length > 0 ? filteredList : contactList
				}
				deleteContact={deleteContact}
				openDetailModal={openDetailModal}
				onSearch={handleSearch}
			/>
			<GroupModal
				isOpen={isGroupModalOpen}
				onClose={() => setIsGroupModalOpen(false)}
				groups={groups}
				onAddGroup={addGroup}
				onDeleteGroup={deleteGroup}
				isGroupDeletable={isGroupDeletable}
			/>
			<DetailModal
				isOpen={isDetailModalOpen}
				onClose={() => setIsDetailModalOpen(false)}
				contact={selectedContact}
				updateContact={updateContact}
				groups={groups}
			/>
		</main>
	);
}

export default App;
