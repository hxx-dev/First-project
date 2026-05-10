import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import ProductForm from "../../components/common/ProductForm";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct, updateProduct } = useContext(ProductContext);
  const product = getProduct(id);

  const [formData, setFormData] = useState({
    title: "", rating: "", reviewNum: "", priceNum: "",
    size: [], category: "", gender: "", color: "",
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        rating: product.rating || "",
        reviewNum: product.reviewNum || "",
        priceNum: product.priceNum || "",
        size: product.size || [],
        category: product.category || "",
        gender: product.gender || "",
        color: product.color || "",
      });
      setPreviewUrl(product.imageUrl || null);
    }
  }, [id]);

  if (!product) return (
    <div style={{ textAlign: "center", padding: "120px 0", fontFamily: "Pretendard", color: "#aaa" }}>
      상품을 찾을 수 없습니다.
    </div>
  );

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSingleChip = (field, value) =>
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value,
    }));

  const handleImageChange = (_, url) => setPreviewUrl(url);

  const handleSubmit = () => {
    const priceNum = Number(formData.priceNum);
    updateProduct(id, {
      ...formData,
      imageUrl: previewUrl || product.imageUrl,
      priceNum,
      price: `${priceNum.toLocaleString()}원`,
      rating: Number(formData.rating) || 0,
      reviewNum: Number(formData.reviewNum) || 0,
      review: `리뷰 ${Number(formData.reviewNum).toLocaleString()}`,
    });
    navigate(`/ProductDetail/${id}`);
  };

  return (
    <ProductForm
      formData={formData}
      onChange={handleChange}
      onSingleChip={handleSingleChip}
      onImageChange={handleImageChange}
      previewUrl={previewUrl}
      submitLabel="상품 수정 완료"
      onSubmit={handleSubmit}
      isEdit={true}
    />
  );
}