import {
  LoaderContainer,
  LoaderCircle,
  LoaderShadow,
} from './Loader.components';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderCircle></LoaderCircle>
      <LoaderCircle></LoaderCircle>
      <LoaderCircle></LoaderCircle>
      <LoaderShadow></LoaderShadow>
      <LoaderShadow></LoaderShadow>
      <LoaderShadow></LoaderShadow>
    </LoaderContainer>
  );
};

export default Loader;
