import { h, Component } from "preact";

import Code from 'preact-prism';
import 'prismjs/themes/prism-okaidia.css'; /* import prism themes */

import FormValues from '../form-values'
import { Form, Validators, validateField } from 'preact-forms-helper';

export default class Example2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: new Form({
        city: { validators: [Validators.required(), Validators.minLength(3), Validators.maxLength(10)] },
        zipcode: { validators: [Validators.required(), Validators.pattern(/^[0-9]{5}$/)] },
        website: { validators: [Validators.required(), Validators.url()] },
        email: { validators: [Validators.required(), Validators.email()] },
        alpha: { validators: [Validators.required(), Validators.alpha()] },
        alphaDash: { validators: [Validators.required(), Validators.alphaDash()] }
      })
    };
  }


  render({}, {form}) {
    return (
      <div class="example">
        <Code language="javascript">
          {`
  import "./style";
  import { Component } from "preact";

  import { Form, Validators, validateField } from 'preact-forms-helper';

  export default class Example2 extends Component {

    constructor(props) {
      super(props);

      this.state = {
        form: new Form({
          city: { validators: [Validators.required(), Validators.minLength(3), Validators.maxLength(10)] },
          zipcode: { validators: [Validators.required(), Validators.pattern(/^[0-9]{5}$/)] },
          website: { validators: [Validators.required(), Validators.url()] },
          email: { validators: [Validators.required(), Validators.email()] },
          alpha: { validators: [Validators.required(), Validators.alpha()] },
          alphaDash: { validators: [Validators.required(), Validators.alphaDash()] }
        })
      };
    }

    render({}, { form }) {
      return (
        <main>

          <form onSubmit={e => e.preventDefault() }>

            <div class="line">
              <label for="city">City [required, minLength:3, maxLength:10]</label>
              <input id="city" type="text" name="city" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('city') ? <b>Error(s) : {form.getErrors('city').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('city') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="zipcode">Zipcode [pattern:/^[0-9]{'{'}5{'}'}$/]</label>
              <input id="zipcode" type="text" name="zipcode" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('zipcode') ? <b>Error(s) : {form.getErrors('zipcode').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('zipcode') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="website">Website [required, url]</label>
              <input id="website" type="text" name="website" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('website') ? <b>Error(s) : {form.getErrors('website').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('website') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="email">Email [required, email]</label>
              <input id="text" type="email" name="email" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('email') ? <b>Error(s) : {form.getErrors('email').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('email') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="alpha">Alpha [required, alpha]</label>
              <input id="alpha" type="text" name="alpha" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('alpha') ? <b>Error(s) : {form.getErrors('alpha').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('alpha') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="alphaDash">Alpha Dash [required, alphaDash]</label>
              <input id="alphaDash" type="text" name="alphaDash" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('alphaDash') ? <b>Error(s) : {form.getErrors('alphaDash').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('alphaDash') ? <s>Touched</s>:<s>Not touched</s>}
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
              <label for="city">City [required, minLength:3, maxLength:10]</label>
              <input id="city" type="text" name="city" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('city') ? <b>Error(s) : {form.getErrors('city').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('city') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="zipcode">Zipcode [pattern:/^[0-9]{'{'}5{'}'}$/]</label>
              <input id="zipcode" type="text" name="zipcode" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('zipcode') ? <b>Error(s) : {form.getErrors('zipcode').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('zipcode') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="website">Website [required, url]</label>
              <input id="website" type="text" name="website" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('website') ? <b>Error(s) : {form.getErrors('website').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('website') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="email">Email [required, email]</label>
              <input id="text" type="email" name="email" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('email') ? <b>Error(s) : {form.getErrors('email').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('email') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="alpha">Alpha [required, alpha]</label>
              <input id="alpha" type="text" name="alpha" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('alpha') ? <b>Error(s) : {form.getErrors('alpha').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('alpha') ? <s>Touched</s>:<s>Not touched</s>}
            </div>

            <div class="line">
              <label for="alphaDash">Alpha Dash [required, alphaDash]</label>
              <input id="alphaDash" type="text" name="alphaDash" onInput={validateField(this, form)} />
            </div>

            <div class="info-zone">
              {form.hasErrors('alphaDash') ? <b>Error(s) : {form.getErrors('alphaDash').join(' - ')}</b>:<i>Ok</i> }
              {form.isTouched('alphaDash') ? <s>Touched</s>:<s>Not touched</s>}
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