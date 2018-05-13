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
        date1: { validators: [Validators.required(), Validators.dateBeforeToday()] },
        date2: { validators: [Validators.required(), Validators.dateAfterToday()] },
        date3: { validators: [Validators.required(), Validators.dateBefore('2018-01-01')] },
        date4: { validators: [Validators.required(), Validators.dateAfter('2017-12-31')] },
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
          date1: { validators: [Validators.required(), Validators.dateBeforeToday()] },
          date2: { validators: [Validators.required(), Validators.dateAfterToday()] },
          date3: { validators: [Validators.required(), Validators.dateBefore('2018-01-01')] },
          date4: { validators: [Validators.required(), Validators.dateAfter('2017-12-31')] },
        })
      };
    }

    render({}, { form }) {
      return (
        <main>

          <form onSubmit={e => e.preventDefault() }>

              <div class="line">
                <label for="date1">Date1 [required, beforeToday]</label>
                <input id="date1" type="date" name="date1" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date1') ? <b>Error(s) : {form.getErrors('date1').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date1') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="date2">Date2 [required, afterToday]</label>
                <input id="date2" type="date" name="date2" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date2') ? <b>Error(s) : {form.getErrors('date2').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date2') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="date3">Date3 [required, before(2018-01-01)]</label>
                <input id="date3" type="date" name="date3" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date3') ? <b>Error(s) : {form.getErrors('date3').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date3') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="date4">Date4 [required, after(2017-12-31)]</label>
                <input id="date4" type="date" name="date4" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date4') ? <b>Error(s) : {form.getErrors('date4').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date4') ? <s>Touched</s>:<s>Not touched</s>}
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
                <label for="date1">Date1 [required, beforeToday]</label>
                <input id="date1" type="date" name="date1" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date1') ? <b>Error(s) : {form.getErrors('date1').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date1') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="date2">Date2 [required, afterToday]</label>
                <input id="date2" type="date" name="date2" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date2') ? <b>Error(s) : {form.getErrors('date2').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date2') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="date3">Date3 [required, before(2018-01-01)]</label>
                <input id="date3" type="date" name="date3" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date3') ? <b>Error(s) : {form.getErrors('date3').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date3') ? <s>Touched</s>:<s>Not touched</s>}
              </div>

              <div class="line">
                <label for="date4">Date4 [required, after(2017-12-31)]</label>
                <input id="date4" type="date" name="date4" onChange={validateField(this, form)} />
              </div>
              <div class="info-zone">
                {form.hasErrors('date4') ? <b>Error(s) : {form.getErrors('date4').join(' - ')}</b>:<i>Ok</i> }
                {form.isTouched('date4') ? <s>Touched</s>:<s>Not touched</s>}
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