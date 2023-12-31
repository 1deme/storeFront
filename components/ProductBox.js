import { styled } from "styled-components";
import Button, { ButtonStyle } from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex; /* Corrected 'dispay' to 'display' */
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CartButton = styled(Button)`
  /* Applying styles from ButtonStyle to the CartButton */
  ${ButtonStyle}
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const {addProduct} = useContext(CartContext);
  const url = "/products/" + _id;
  return (
    /* eslint-disable react/jsx-key */
    <ProductWrapper value={_id} key={_id}>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <CartButton onClick={() => addProduct(_id)} primary outline>
            <CartIcon />
          </CartButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
