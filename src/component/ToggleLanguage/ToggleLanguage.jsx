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

const StyledButton = styled.button(({ theme }) => ({
  boxSizing: "border-box",
  appearance: "none",
  backgroundColor: "transparent",
  border: "2px solid #e74c3c",
  borderRadius: "0.6em",
  cursor: "pointer",
  display: "-ms-flexbox",
  alignSelf: "center",
  fontSize: "0.6rem",
  fontWeight: "700",
  lineHeight: "1",
  margin: "3px",
  padding: "1em 1em",
  textDecoration: "none",
  textAlign: "center",
  textTransform: "uppercase",
  borderColor: "#bd0000",
  color: theme.color.mainTextColor,
  boxShadow: "0 0 15px 15px #da0404 inset, 0 0 0 0 #d10000",
  transition: "all 150ms ease-in-out",
  "&:hover, &:focus, &:active": {
    color: theme.color.iconColor,
    boxShadow: "0 0 5px 0 #d90320 inset, 0 0 5px 2px #c80518",
  },
  [theme.media.down(`${theme.breakpoints.s}px`)]: {
    fontSize: "0.5rem",
  },
}));

const Wrapper = styled.ul`
  display: flex;
`;
