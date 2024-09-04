import { useState } from "react";

export default function SearchCon({ onSearch }) {
	const [inputValue, setInputValue] = useState("");

	// 검색 실행 함수
	const handleSearch = () => {
		onSearch(inputValue);
	};

	// 전체 목록 보기 함수
	const handleViewAll = () => {
		setInputValue("");
		onSearch(""); // 빈 문자열로 검색하여 모든 항목을 표시
	};

	// 엔터 키 입력 처리 함수
	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			handleSearch();
			setInputValue("");
			document.getElementById("search").focus();
		}
	};

	return (
		<div className="searchCon">
			<div>
				<input
					id="search"
					type="text"
					placeholder="검색어를 입력 후 엔터를 누르세요"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyUp={handleKeyUp}
				/>
			</div>
			<button className="btnViewAll" onClick={handleViewAll}>
				전체리스트 보기
			</button>
		</div>
	);
}
