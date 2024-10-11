import templateOnlyComponent from '@ember/component/template-only';

interface UiPageSignature {
  Args: {
    title: string;
  };
  Blocks: {
    default: [];
  };
}

const UiPageComponent = templateOnlyComponent<UiPageSignature>();

export default UiPageComponent;
