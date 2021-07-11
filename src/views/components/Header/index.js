import React from 'react';
import { useSelector } from 'react-redux';
import theme from '../../../utilities/theme';
import { BlackBar, StyledHeaderContainer, StyledLogoContainer } from './style';

export default function Header() {
  const brand = useSelector((store) => store.brand.brand);
  return (
    <>
      <StyledHeaderContainer color={theme(brand).header_color}>
        <StyledLogoContainer color={theme(brand).header_color}>
          <a href="javascript:void(0)">
            <img src={theme(brand).logo} alt="Brand logo" />
          </a>
        </StyledLogoContainer>
      </StyledHeaderContainer>
      <BlackBar color={theme(brand).footer_color} theme={brand}/>
    </>
  );
}
