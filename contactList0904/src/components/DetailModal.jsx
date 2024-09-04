import { useState, useEffect } from "react";

export default function DetailModal({
	isOpen,
	onClose,
	contact,
	updateContact,
	groups,
}) {
	// 편집 중인 연락처 정보를 저장하는 상태
	const [editedContact, setEditedContact] = useState(contact || {});
	// 편집 모드 여부를 저장하는 상태
	const [isEditing, setIsEditing] = useState(false);
	// 전화번호 오류 메시지를 저장하는 상태
	const [phoneError, setPhoneError] = useState("");

	// contact prop이 변경될 때마다 editedContact 상태를 업데이트
	useEffect(() => {
		if (contact) {
			setEditedContact(contact);
			setPhoneError("");
		}
	}, [contact]);

	// 전화번호 유효성을 검사하는 함수
	const validatePhoneNumber = (phone) => {
		const phoneRegex = /^010-\d{4}-\d{4}$/;
		return phoneRegex.test(phone);
	};

	// 입력 필드 변경 시 호출되는 함수
	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedContact((prev) => ({ ...prev, [name]: value }));

		// 전화번호 필드가 변경될 때 유효성 검사 수행
		if (name === "phone") {
			if (!validatePhoneNumber(value)) {
				setPhoneError("전화번호는 010-0000-0000 형식이어야 합니다.");
			} else {
				setPhoneError("");
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validatePhoneNumber(editedContact.phone)) {
			updateContact(editedContact);
			setIsEditing(false);
			setPhoneError("");
		} else {
			setPhoneError("유효한 전화번호를 입력해주세요.");
		}
	};

	// 모달이 열려있지 않거나 contact 정보가 없으면 아무것도 렌더링하지 않음
	if (!isOpen || !contact) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h2>연락처 상세 정보</h2>
				{isEditing ? (
					// 편집 모드일 때 표시되는 폼
					<form onSubmit={handleSubmit}>
						<p>
							<strong>이름:</strong> {editedContact.name}
						</p>
						<p>
							<strong>전화번호:</strong>
							<input
								type="text"
								name="phone"
								value={editedContact.phone}
								onChange={handleChange}
							/>
						</p>
						{phoneError && <p className="error">{phoneError}</p>}
						<p>
							<strong>그룹:</strong>
							<select
								name="group"
								value={editedContact.group}
								onChange={handleChange}
							>
								{groups.map((group) => (
									<option key={group} value={group}>
										{group}
									</option>
								))}
							</select>
						</p>
						<p>
							<strong>메모:</strong>
							<textarea
								name="memo"
								value={editedContact.memo}
								onChange={handleChange}
							/>
						</p>
						<button type="submit" disabled={!!phoneError}>
							저장
						</button>
						<button
							type="button"
							onClick={() => {
								setIsEditing(false);
								setPhoneError("");
							}}
						>
							취소
						</button>
					</form>
				) : (
					// 편집 모드가 아닐 때 표시되는 정보
					<>
						<p>
							<strong>이름:</strong> {contact.name}
						</p>
						<p>
							<strong>전화번호:</strong> {contact.phone}
						</p>
						<p>
							<strong>그룹:</strong> {contact.group}
						</p>
						<p>
							<strong>메모:</strong> {contact.memo}
						</p>
						<button onClick={() => setIsEditing(true)}>수정</button>
					</>
				)}
				<button className="btnClose" onClick={onClose}>
					닫기
				</button>
			</div>
		</div>
	);
}
