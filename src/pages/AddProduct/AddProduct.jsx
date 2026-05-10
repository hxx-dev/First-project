import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import ProductForm from "../../components/common/ProductForm";

const INITIAL = {
  title: "",
  rating: "",
  reviewNum: "",
  priceNum: "",
  size: [],
  category: "",
  gender: "",
  color: "",
};

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);
  const [formData, setFormData] = useState(INITIAL);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSingleChip = (field, value) =>
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value,
    }));

  const handleImageChange = (_, url) => setPreviewUrl(url);

  const handleSubmit = () => {
    if (!formData.title || !formData.priceNum) {
      alert("상품명과 가격은 필수입니다.");
      return;
    }
    const priceNum = Number(formData.priceNum);
    addProduct({
      ...formData,
      imageUrl: previewUrl || "",
      priceNum,
      price: `${priceNum.toLocaleString()}원`,
      rating: Number(formData.rating) || 0,
      reviewNum: Number(formData.reviewNum) || 0,
      review: `리뷰 ${Number(formData.reviewNum).toLocaleString()}`,
    });
    navigate("/");
  };

  return (
    <ProductForm
      formData={formData}
      onChange={handleChange}
      onSingleChip={handleSingleChip}
      onImageChange={handleImageChange}
      previewUrl={previewUrl}
      submitLabel="상품 등록 완료"
      onSubmit={handleSubmit}
      isEdit={false}
    />
  );
}
