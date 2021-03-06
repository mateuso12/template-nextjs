import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e o nome React avançado ao lado"
    />
    <S.Title>React boilerplate</S.Title>
    <S.Description>
      Typescript, ReactJS,NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
);

export default Main;
