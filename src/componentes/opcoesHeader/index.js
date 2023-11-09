import styled from 'styled-components';

const Options = styled.ul`
  display: flex;
`;

const TypeOpt = styled.ul`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;

const labelOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
  return (
    <Options>
      {labelOptions.map((x, index) => (
        <TypeOpt key={index}>
          <p>{x}</p>
        </TypeOpt>
      ))}
    </Options>
  );
}

export default OpcoesHeader;
