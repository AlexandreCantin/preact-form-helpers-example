import { h, Component } from "preact";

import Code from 'preact-prism';
import 'prismjs/themes/prism-okaidia.css'; /* import prism themes */

import FormValues from '../form-values'
import { Form, Validators, validateField } from 'preact-forms-helper';

export default class Example1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: new Form({
        name: { validators: [Validators.required()] },
        number: { validators: [Validators.required(), Validators.minInteger(2), Validators.maxInteger(5)] },
        range: { validators: [Validators.required(), Validators.minInteger(2), Validators.maxInteger(5)] }
      })
    };
  }

  render({}, {form}) {
    return(
      <div class="example">
        <Code language="javascript">
{`
  import "./style";
  import { Component } from "preact";

  import { Form, Validators, validateField } from 'preact-forms-helper';

  export default class Example1 extends Component {

    constructor(props) {
      super(props);

      this.state = {
        form: new Form({
          name: { validators: [Validators.required()] },
          number: { validators: [ Validators.required(),
                                  Validators.minInteger(2),
                                  Validators.maxInteger(5)] },
          range: { validators: [ Validators.required(),
                                  Validators.minInteger(2),
                                  Validators.maxInteger(5)] }
        });
      };
    }

    render({}, { form }) {
      return (
        <main>

          <form onSubmit={e => e.preventDefault() }>
            <div class="line">
              <label for="name">Name [required]</label>
              <input id="name" type="text" name="name" onInput={validateField(this, form)} />
            </div>
            <div class="info-zone">
              {form.hasErrors('name') ? <b>Error(s) : {form.getErrors('name').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('name') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="number">Number [required, minInteger:2, maxInteger:5]</label>
              <input type="number" name="number" onChange={validateField(this, form)} />
            </div>
            <div class="info-zone">
              {form.hasErrors('number') ? <b>Error(s) : {form.getErrors('number').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('number') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="range">Range [required, minInteger:2, maxInteger:5]</label>
              <input type="range" name="range" min="0" max="10" onChange={validateField(this, form)} />
            </div>
            <div class="info-zone">
              {form.hasErrors('range') ? <b>Error(s) : {form.getErrors('range').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('range') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <input disabled={!form.isValid()} type="submit" value="Submit form" />
              { form.isValid() ? <i>Form valid</i> : <b>Form invalid</b> }
            </div>

          </form>

          <FormValues form={form} />
        </main>
      );
    }
  }
`}
        </Code>

        <main>

          <form onSubmit={e => e.preventDefault() }>
            <div class="line">
              <label for="name">Name [required]</label>
              <input id="name" type="text" name="name" onInput={validateField(this, form)} />
            </div>
            <div class="info-zone">
              {form.hasErrors('name') ? <b>Error(s) : {form.getErrors('name').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('name') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="number">Number [required, minInteger:2, maxInteger:5]</label>
              <input type="number" name="number" onChange={validateField(this, form)} />
            </div>
            <div class="info-zone">
              {form.hasErrors('number') ? <b>Error(s) : {form.getErrors('number').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('number') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="range">Range [required, minInteger:2, maxInteger:5]</label>
              <input type="range" name="range" min="0" max="10" onChange={validateField(this, form)} />
            </div>
            <div class="info-zone">
              {form.hasErrors('range') ? <b>Error(s) : {form.getErrors('range').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('range') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <input disabled={!form.isValid()} type="submit" value="Submit form" />
              { form.isValid() ? <i>Form valid</i> : <b>Form invalid</b> }
            </div>

          </form>

          <FormValues form={form} />
        </main>
      </div>
    )
  }
}