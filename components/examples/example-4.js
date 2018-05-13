import { h, Component } from "preact";

import Code from 'preact-prism';
import 'prismjs/themes/prism-okaidia.css'; /* import prism themes */

import FormValues from '../form-values'
import { Form, Validators, validateField } from 'preact-forms-helper';


export default class Example3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: new Form({
        select: { validators: [Validators.required()] },
        contact: { validators: [Validators.required()] },
        drink: { validators: [Validators.required(), Validators.minLength(2), Validators.maxLength(3)], multiple: true },
        drinkSelect: { validators: [Validators.required(), Validators.minLength(2), Validators.maxLength(3)], multiple: true },
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
          select: { validators: [Validators.required()] },
          contact: { validators: [Validators.required()] },
          drink: { validators: [Validators.required(), Validators.minLength(2), Validators.maxLength(3)], multiple: true },
          drinkSelect: { validators: [Validators.required(), Validators.minLength(2), Validators.maxLength(3)], multiple: true },
        })
      };
    }

    render({}, { form }) {
      return (
        <main>

          <form onSubmit={e => e.preventDefault() }>

              <div class="line">
                <label for="select">Select [required]</label>
                <select id="select" name="select" onChange={validateField(this, form)}>
                  <option value=''></option>
                  <option value='first'>First</option>
                  <option value='second'>Second</option>
                  <option value='third'>Third</option>
                </select>
              </div>
              <div class="info-zone">
                {form.hasErrors('select') ? <b>Error(s) : {form.getErrors('select').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('select') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <strong>Contact [required]</strong>

                <div class="flex">
                  <div class="radio-line">
                    <input type="radio" id="email" name="contact" value="email" onChange={validateField(this, form)} checked={form.isSelected('contact','email')} />
                    <label for="email">Email</label>
                  </div>
                  <div class="radio-line">
                    <input type="radio" id="phone" name="contact" value="phone" onChange={validateField(this, form)} checked={form.isSelected('contact','phone')} />
                    <label for="phone">Phone</label>
                  </div>
                  <div class="radio-line">
                    <input type="radio" id="mail" name="contact" value="mail" onChange={validateField(this, form)} checked={form.isSelected('contact','mail')}  />
                    <label for="mail">Mail</label>
                  </div>
                </div>
              </div>
              <div class="info-zone">
                {form.hasErrors('contact') ? <b>Error(s) : {form.getErrors('contact').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('contact') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <strong>Drink [required,minLength:2,maxLength:3]</strong>

                <div class="grid-3">
                  <div class="radio-line">
                    <input type="checkbox" id="tea" name="drink" value="tea" onChange={validateField(this, form)} checked={form.isSelected('drink','tea')} />
                    <label for="tea">Tea</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="coffee" name="drink" value="coffee" onChange={validateField(this, form)} checked={form.isSelected('drink','coffee')} />
                    <label for="coffee">Coffee</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="apple-juice" name="drink" value="apple-juice" onChange={validateField(this, form)} checked={form.isSelected('drink','apple-juice')}  />
                    <label for="apple-juice">Apple juice</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="water" name="drink" value="water" onChange={validateField(this, form)} checked={form.isSelected('drink','water')}  />
                    <label for="water">Water</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="orange-juice" name="drink" value="orange-juice" onChange={validateField(this, form)} checked={form.isSelected('drink','orange-juice')}  />
                    <label for="orange-juice">Orange-juice</label>
                  </div>
                </div>
              </div>
              <div class="info-zone">
                {form.hasErrors('drink') ? <b>Error(s) : {form.getErrors('drink').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('drink') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="select">Drinks again [required,minLength:2,maxLength:3]</label>
                <select name="drinkSelect" multiple onChange={validateField(this, form)}>
                  <option value="tea">Tea</option>
                  <option value="coffee">Coffee</option>
                  <option value="apple-juice">Apple juice</option>
                  <option value="water">Water</option>
                  <option value="orange-juice">Orange-juice</option>
                </select>
              </div>
              <div class="info-zone">
                {form.hasErrors('drinkSelect') ? <b>Error(s) : {form.getErrors('drinkSelect').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('drinkSelect') ? <s>Touched</s>:<s>Not touched</s>}
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
                <label for="select">Select [required]</label>
                <select id="select" name="select" onChange={validateField(this, form)}>
                  <option value=''></option>
                  <option value='first'>First</option>
                  <option value='second'>Second</option>
                  <option value='third'>Third</option>
                </select>
              </div>
              <div class="info-zone">
                {form.hasErrors('select') ? <b>Error(s) : {form.getErrors('select').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('select') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <strong>Contact [required]</strong>

                <div class="flex">
                  <div class="radio-line">
                    <input type="radio" id="email" name="contact" value="email" onChange={validateField(this, form)} checked={form.isSelected('contact','email')} />
                    <label for="email">Email</label>
                  </div>
                  <div class="radio-line">
                    <input type="radio" id="phone" name="contact" value="phone" onChange={validateField(this, form)} checked={form.isSelected('contact','phone')} />
                    <label for="phone">Phone</label>
                  </div>
                  <div class="radio-line">
                    <input type="radio" id="mail" name="contact" value="mail" onChange={validateField(this, form)} checked={form.isSelected('contact','mail')}  />
                    <label for="mail">Mail</label>
                  </div>
                </div>
              </div>
              <div class="info-zone">
                {form.hasErrors('contact') ? <b>Error(s) : {form.getErrors('contact').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('contact') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <strong>Drink [required,minLength:2,maxLength:3]</strong>

                <div class="grid-3">
                  <div class="radio-line">
                    <input type="checkbox" id="tea" name="drink" value="tea" onChange={validateField(this, form)} checked={form.isSelected('drink','tea')} />
                    <label for="tea">Tea</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="coffee" name="drink" value="coffee" onChange={validateField(this, form)} checked={form.isSelected('drink','coffee')} />
                    <label for="coffee">Coffee</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="apple-juice" name="drink" value="apple-juice" onChange={validateField(this, form)} checked={form.isSelected('drink','apple-juice')}  />
                    <label for="apple-juice">Apple juice</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="water" name="drink" value="water" onChange={validateField(this, form)} checked={form.isSelected('drink','water')}  />
                    <label for="water">Water</label>
                  </div>
                  <div class="radio-line">
                    <input type="checkbox" id="orange-juice" name="drink" value="orange-juice" onChange={validateField(this, form)} checked={form.isSelected('drink','orange-juice')}  />
                    <label for="orange-juice">Orange-juice</label>
                  </div>
                </div>
              </div>
              <div class="info-zone">
                {form.hasErrors('drink') ? <b>Error(s) : {form.getErrors('drink').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('drink') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="select">Drinks again [required,minLength:2,maxLength:3]</label>
                <select name="drinkSelect" multiple onChange={validateField(this, form)}>
                  <option value="tea">Tea</option>
                  <option value="coffee">Coffee</option>
                  <option value="apple-juice">Apple juice</option>
                  <option value="water">Water</option>
                  <option value="orange-juice">Orange-juice</option>
                </select>
              </div>
              <div class="info-zone">
                {form.hasErrors('drinkSelect') ? <b>Error(s) : {form.getErrors('drinkSelect').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('drinkSelect') ? <s>Touched</s>:<s>Not touched</s>}
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