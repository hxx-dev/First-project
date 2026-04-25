import styled from "styled-components";
import ProductCard from "./ProductCard";
import grayhoodieUrl from "../../assets/images/gray_hoodie.png";
import bluehoddieUrl from "../../assets/images/blue_hoodie.png";
import blackjerseyUrl from "../../assets/images/black_jersey.png";
import hoodiezipupUrl from "../../assets/images/hoodie_zip_up.png";
import grayshoesUrl from "../../assets/images/gray_shoes.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 20px; 
  padding: 20px 160px;
`;

export default function ProductList() {
  return (
    <Container>
      <ProductCard 
        imageUrl={grayhoodieUrl}
        title="아이앱 스튜디오 25 후드 라이트 그레이"
        price="145,000원"
        review="리뷰 1,561"
      />
      <ProductCard 
        imageUrl={bluehoddieUrl}
        title="아이앱 스튜디오 25 후드 라이트 블루"
        price="145,000원"
        review="리뷰 1,732"
      />
      <ProductCard 
        imageUrl={blackjerseyUrl}
        title="아디다스 블랙 져지 2016"
        price="255,000원"
        review="리뷰 781"
      />
      <ProductCard 
        imageUrl={hoodiezipupUrl}
        title="슈프림 후드집업 30 딥블루"
        price="458,000원"
        review="리뷰 2,567"
      />
       <ProductCard 
        imageUrl={grayshoesUrl}
        title="나이키 에어 그레이 하운드 25"
        price="235,000원"
        review="리뷰 231"
      />
            <ProductCard 
        imageUrl={grayhoodieUrl}
        title="아이앱 스튜디오 25 후드 라이트 그레이"
        price="145,000원"
        review="리뷰 1,561"
      />
      <ProductCard 
        imageUrl={bluehoddieUrl}
        title="아이앱 스튜디오 25 후드 라이트 블루"
        price="145,000원"
        review="리뷰 1,732"
      />
      <ProductCard 
        imageUrl={blackjerseyUrl}
        title="아디다스 블랙 져지 2016"
        price="255,000원"
        review="리뷰 781"
      />
      <ProductCard 
        imageUrl={hoodiezipupUrl}
        title="슈프림 후드집업 30 딥블루"
        price="458,000원"
        review="리뷰 2,567"
      />
       <ProductCard 
        imageUrl={grayshoesUrl}
        title="나이키 에어 그레이 하운드 25"
        price="235,000원"
        review="리뷰 231"
      />
    </Container>
  );
}