import React from 'react';
import { useSelector } from 'react-redux';
import theme from '../../../utilities/theme';
import { StyledHeaderContainer, StyledLogoContainer } from './style';
import { StyledFooterContainer } from '../../styled/Containers';
import { useEffect } from 'react';

export default function Footer() {
  const [webDisclaimer, setWebDisclaimer] = React.useState();
  const brand = useSelector((store) => store.brand.brand);
  const brandInfo = useSelector((store) => store.brandInfo.brandInfo);
  
  useEffect(() => {
    setWebDisclaimer(brandInfo.config.webDisclaimer)
  }, [brandInfo]);
  return (
    <StyledHeaderContainer color={theme(brand).footer_color} theme={brand}>
      <StyledFooterContainer theme={brand}>
        <p>
          {webDisclaimer}
        </p>
      </StyledFooterContainer>
      <StyledLogoContainer></StyledLogoContainer>
    </StyledHeaderContainer>
  );
}
