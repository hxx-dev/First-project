import styled from "styled-components";
import vectorUrl from "../../assets/icons/Vector.svg";

const FilterContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;
const FilterButton = styled.button`
  display: flex;
  width: 72px;
  padding: 8px 11px 11px 10px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 20px;
  background: #f2f2f2;
  cusror: pointer;
  &:hover {
    background: #f4f4f4;
  }
`;
const FilterText = styled.div`
  width: 37px;
  height: 14px;
  flex-shrink: 0;
  color: #616161;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FilterIcon = styled.img`
  width: 10px;
  height: 5px;
  flex-shrink: 0;
  aspect-ratio: 2/1;
  stroke-width: 1px;
  stroke: #858585;
`;

export default function Filter({
  onOpenGender,
  onOpenColor,
  onOpenSize,
  onOpenPrice,
  onOpenCategory,
}) {
  return (
    <FilterContainer>
      <FilterButton onClick={onOpenGender}>
        <FilterText>성별</FilterText> <FilterIcon src={vectorUrl} />
      </FilterButton>
      <FilterButton onClick={onOpenColor}>
        <FilterText>색상</FilterText> <FilterIcon src={vectorUrl} />
      </FilterButton>
      <FilterButton onClick={onOpenSize}>
        <FilterText>사이즈</FilterText> <FilterIcon src={vectorUrl} />
      </FilterButton>
      <FilterButton onClick={onOpenPrice}>
        <FilterText>가격대</FilterText> <FilterIcon src={vectorUrl} />
      </FilterButton>
      <FilterButton onClick={onOpenCategory}>
        <FilterText>종류</FilterText> <FilterIcon src={vectorUrl} />
      </FilterButton>
    </FilterContainer>
  );
}
