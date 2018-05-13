import { h, Component } from "preact";

export default class FormValues {
  render({ form }, {}) {
    let values = form.getValues();
    return values ? <pre>{JSON.stringify(values, null, 2)}</pre>: null;
  }
}