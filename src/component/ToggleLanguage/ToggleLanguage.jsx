import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ToggleLanguage = () => {
  const LANGAGUES = ["en", "ua"];
  const { i18n } = useTranslation();

  return (
    <div>
      <Wrapper>
        {LANGAGUES.map((langague) => {
          return (
            <li key={langague}>
              <StyledButton
                id={
                  i18n.resolvedLanguage === langague ? "selectedLang" : "langId"
                }
                onClick={() => i18n.changeLanguage(langague)}
                className={i18n.resolvedLanguage === langague && "active"}
              >
                {langague}
              </StyledButton>
            </li>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default ToggleLanguage;

const StyledButton = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 1;
  margin: 3px;
  padding: 1em 1em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  border-color: #bd0000;
  color: ${(props) => props.theme.color.mainTextColor};
  box-shadow: 0 0 15px 15px
      ${(props) => props.theme.color.accentBackgroundColor} inset,
    0 0 0 0 #d10000;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  font-family: Georgia;
  :hover,
  :focus,
  &.active {
    color: ${(props) => props.theme.color.iconColor};
    box-shadow: 0 0 5px 0 #d90320 inset, 0 0 5px 2px #c80518;
  }
`;

const Wrapper = styled.ul`
  display: flex;
`;
