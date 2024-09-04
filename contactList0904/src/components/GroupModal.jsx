import { useState } from "react";

export default function GroupModal({
	isOpen,
	onClose,
	groups,
	onAddGroup,
	onDeleteGroup,
	isGroupDeletable,
}) {
	const [newGroup, setNewGroup] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	// 새 그룹 추가 함수
	const handleAddGroup = () => {
		if (newGroup.trim() !== "") {
			onAddGroup(newGroup.trim());
			setNewGroup("");
		}
	};

	// 그룹 삭제 함수
	const handleDeleteGroup = (group) => {
		const result = onDeleteGroup(group);
		if (!result.success) {
			setErrorMessage(result.message);
		} else {
			setErrorMessage("");
		}
	};

	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h2>그룹 관리</h2>
				{errorMessage && (
					<p className="error-message">{errorMessage}</p>
				)}
				<ul>
					{groups.map((group, index) => (
						<li key={index}>
							{group}
							<button
								className={`btnGroupDelete ${
									!isGroupDeletable(group) ? "disabled" : ""
								}`}
								onClick={() => handleDeleteGroup(group)}
								disabled={!isGroupDeletable(group)}
								title={
									!isGroupDeletable(group)
										? "사용중인 그룹 삭제할 수 없어요."
										: ""
								}
							>
								X
							</button>
						</li>
					))}
				</ul>
				<div>
					<input
						type="text"
						value={newGroup}
						onChange={(e) => setNewGroup(e.target.value)}
						placeholder="새 그룹 이름"
					/>
					<button onClick={handleAddGroup}>추가</button>
				</div>
				<button className="btnClose" onClick={onClose}>
					닫기
				</button>
			</div>
		</div>
	);
}
