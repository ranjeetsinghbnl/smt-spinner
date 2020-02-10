/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SmtProgressSpinner {
    'color': string;
    'diameter': number;
    'mode': string;
    'strokeWidth': number;
    'value': number;
  }
}

declare global {


  interface HTMLSmtProgressSpinnerElement extends Components.SmtProgressSpinner, HTMLStencilElement {}
  var HTMLSmtProgressSpinnerElement: {
    prototype: HTMLSmtProgressSpinnerElement;
    new (): HTMLSmtProgressSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    'smt-progress-spinner': HTMLSmtProgressSpinnerElement;
  }
}

declare namespace LocalJSX {
  interface SmtProgressSpinner {
    'color'?: string;
    'diameter'?: number;
    'mode'?: string;
    'strokeWidth'?: number;
    'value'?: number;
  }

  interface IntrinsicElements {
    'smt-progress-spinner': SmtProgressSpinner;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'smt-progress-spinner': LocalJSX.SmtProgressSpinner & JSXBase.HTMLAttributes<HTMLSmtProgressSpinnerElement>;
    }
  }
}

