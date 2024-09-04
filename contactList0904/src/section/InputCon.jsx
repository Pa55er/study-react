import { useState, useEffect } from "react";
import InputEl from "../components/InputEl";
import SelectEl from "../components/SelectEl";

export default function InputCon({
	addContact,
	groups,
	openModal,
	contactList,
}) {
	// 랜덤 ID 생성 함수
	const generateRandomId = () => Math.random().toString(36).slice(2, 11);

	const initialFormData = {
		id: generateRandomId(), // 초기 랜덤 ID 생성
		name: "",
		phone: "",
		group: groups[0],
		memo: "",
	};
	// 초기 폼 데이터 상태
	const [formData, setFormData] = useState(initialFormData);

	// 유효성 검사 에러 상태
	const [errors, setErrors] = useState({ name: "", phone: "" });

	// 폼 유효성 상태
	const [isFormValid, setIsFormValid] = useState(false);

	// 폼 유효성 상태 업데이트
	useEffect(() => {
		const isValid =
			validateName(formData.name) &&
			validatePhone(formData.phone) &&
			!errors.name &&
			!errors.phone;
		setIsFormValid(isValid);
	}, [formData, errors]);

	// 이름 유효성 검사 함수
	const validateName = (name) => {
		return /^[가-힣]{2,}[0-9]*$/.test(name);
	};

	// 전화번호 유효성 검사 함수
	const validatePhone = (phone) => {
		return /^010-\d{4}-\d{4}$/.test(phone);
	};

	// 입력 변경 핸들러
	const handleInputChange = (e) => {
		const { id, value } = e.target; //input 요소의 id값을 의미한다.
		setFormData((prevData) => ({ ...prevData, [id]: value }));

		// 이름 또는 전화번호 필드에 대한 유효성 검사
		if (id === "name") {
			if (!validateName(value)) {
				setErrors((prev) => ({
					...prev,
					name: "한글 2글자 이상, 선택적으로 숫자를 끝에 추가 가능.",
				}));
			} else if (contactList.some((contact) => contact.name === value)) {
				setErrors((prev) => ({
					...prev,
					name: "동일이름이 존재합니다.",
				}));
			} else {
				setErrors((prev) => ({ ...prev, name: "" }));
			}
		} else if (id === "phone") {
			setErrors((prev) => ({
				...prev,
				phone: validatePhone(value)
					? ""
					: "전화번호는 010-0000-0000 형식으로 입력해주세요.",
			}));
		}
	};

	// 폼 제출 핸들러
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isFormValid) {
			const success = addContact(formData);
			if (success) {
				setFormData({
					...initialFormData,
					id: generateRandomId(), // 새로운 랜덤 ID 생성
					group: formData.group, // 현재 선택된 그룹 유지
				});
				setErrors({ name: "", phone: "" });
				setIsFormValid(false);
			} else {
				setErrors((prev) => ({
					...prev,
					name: "동일이름이 존재합니다.",
				}));
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className="inputCon">
			<InputEl
				inputName="이름"
				inputId="name"
				value={formData.name}
				onChange={handleInputChange}
			/>
			{errors.name && <p className="error">{errors.name}</p>}
			<InputEl
				inputName="전화번호"
				inputId="phone"
				value={formData.phone}
				onChange={handleInputChange}
			/>
			{errors.phone && <p className="error">{errors.phone}</p>}
			<SelectEl
				inputName="그룹"
				selectId="group"
				value={formData.group}
				onChange={handleInputChange}
				options={groups}
			/>
			<button type="button" onClick={openModal} className="btnAddGroup">
				조직추가
			</button>
			<InputEl
				inputName="간단한기록"
				inputId="memo"
				value={formData.memo}
				onChange={handleInputChange}
			/>
			<button
				type="submit"
				className={`btnSave btnViewAll ${
					!isFormValid ? "disabled" : ""
				}`}
				disabled={!isFormValid}
			>
				저장
			</button>
		</form>
	);
}
