export default class Validate {

  /**
   *  Public: Validate constructor
   *
   *  * `test` {RegExp|String|Function} If string it will be converted to {Regexp}, if {Function} it will pass the value to the function and expect a returned {Boolean}.
   *  * `exist` (optional) {Boolean|String} `true` means it must be present, `false` means it must not be present, `'optional'` could be either.
   *  * `type` (optional) {String} expected value type. If is 'Array' it will run the test over each item in the array. Defaults to 'String'.
   *
   *  ## Examples
   *
   *  ```js
   *  const validate = new Validate('git');
   *  ```
   */
  constructor({ test, exist = true, type = 'String', template = true, templateVars = {} }){
    this.test = test;
    this.exist = exist;
    this.type = type;
    this.template = template;
  }
}
