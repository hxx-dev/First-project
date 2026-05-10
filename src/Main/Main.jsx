import { useState, useMemo } from "react";
import styled from "styled-components";
import FilterGroup from "../components/common/FilterBar";
import SortOption from "../components/common/SortOption";
import ProductList from "../components/common/ProductList";
import FilterModal from "../components/common/FilterModal";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;
  margin-top: 20px;
`;

const FilterData = {
  gender: { title: "성별", options: [["남성", "여성", "남녀공용"]] },
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
  price: { title: "가격대", options: [["0~30", "31~60", "61~90", "91~"]] },
  category: { title: "종류", options: [["의류", "신발"]] },
};

function matchesPrice(priceNum, selectedPrices) {
  if (selectedPrices.length === 0) return true;
  return selectedPrices.some((range) => {
    if (range === "0~30") return priceNum >= 0 && priceNum <= 30;
    if (range === "31~60") return priceNum >= 31 && priceNum <= 60;
    if (range === "61~90") return priceNum >= 61 && priceNum <= 90;
    if (range === "91~") return priceNum >= 91;
    return false;
  });
}

export default function Main() {
  const { products } = useContext(ProductContext);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    color: [],
    size: [],
    price: [],
    category: [],
  });

  const toggleFilter = (filterKey, option) => {
    setSelectedFilters((prev) => {
      const current = prev[filterKey];
      return {
        ...prev,
        [filterKey]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (
        selectedFilters.gender.length > 0 &&
        !selectedFilters.gender.includes(p.gender)
      )
        return false;
      if (
        selectedFilters.color.length > 0 &&
        !selectedFilters.color.includes(p.color)
      )
        return false;
      if (
        selectedFilters.size.length > 0 &&
        !selectedFilters.size.some((s) => p.size?.includes(s))
      )
        return false;
      if (
        selectedFilters.price.length > 0 &&
        !matchesPrice(p.priceNum, selectedFilters.price)
      )
        return false;
      if (
        selectedFilters.category.length > 0 &&
        !selectedFilters.category.includes(p.category)
      )
        return false;
      return true;
    });
  }, [products, selectedFilters]);

  return (
    <div>
      <TopSection>
        <FilterGroup
          onOpenGender={() => setActiveModal("gender")}
          onOpenColor={() => setActiveModal("color")}
          onOpenSize={() => setActiveModal("size")}
          onOpenPrice={() => setActiveModal("price")}
          onOpenCategory={() => setActiveModal("category")}
          selectedFilters={selectedFilters}
        />
        <SortOption />
      </TopSection>
      <ProductList products={filteredProducts} />
      {activeModal && FilterData[activeModal] && (
        <FilterModal
          title={FilterData[activeModal].title}
          options={FilterData[activeModal].options}
          selected={selectedFilters[activeModal]}
          onToggle={(option) => toggleFilter(activeModal, option)}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
