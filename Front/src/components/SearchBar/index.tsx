import {
  InputWrapper,
  SearchBarContainer,
  SearchButton,
  SearchIconContainer,
  SearchInput,
} from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { FunctionComponent } from "react";

interface Props {
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit(): void
}
export const SearchBar: FunctionComponent<Props> = ({
  filterText,
  setFilterText,
  onSubmit,
}) => {
  return (
    <SearchBarContainer onSubmit={onSubmit}>
      <InputWrapper>
        <SearchIconContainer>
          <MagnifyingGlass size={24} />
        </SearchIconContainer>
        <SearchInput
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filtre a sua busca"
        />
      </InputWrapper>
      <SearchButton type="submit">Buscar</SearchButton>
    </SearchBarContainer>
  );
};
