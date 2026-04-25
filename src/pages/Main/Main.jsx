import { useState } from "react";
import styled from "styled-components";
import FilterGroup from "../../components/common/FilterBar";
import SortOption from "../../components/common/SortOption";
import ProductList from "../../components/common/ProductList";
import FilterModal from "../../components/common/FilterModal";

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;
  margin-top: 20px;
`;

const FilterData = {
  gender: {
    title: "성별",
    options: [["female", "male", "unisex"]],
  },
  color: {
    title: "색상",
    options: [
      ["red", "pink", "blue"],
      ["black", "gray", "denim"],
      ["rainbow", "multi", "holographic"],
    ],
  },
  size: {
    title: "사이즈",
    options: [
      ["9", "10"],
      ["S", "M", "L", "XL"],
    ],
  },
  price: {
    title: "가격대",
    options: [["0~30", "31~60", "61~90"]],
  },
  category: {
    title: "종류",
    options: [["의류", "신발"]],
  },
};

export default function Main() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <TopSection>
        <FilterGroup
          onOpenGender={() => setActiveModal("gender")}
          onOpenColor={() => setActiveModal("color")}
          onOpenSize={() => setActiveModal("size")}
          onOpenPrice={() => setActiveModal("price")}
          onOpenCategory={() => setActiveModal("category")}
        />
        <SortOption />
      </TopSection>

      <ProductList />

      {activeModal && FilterData[activeModal] && (
        <FilterModal
          title={FilterData[activeModal].title}
          options={FilterData[activeModal].options}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
