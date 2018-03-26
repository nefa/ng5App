export class ConfirmationElement {
    constructor(id, label, type, orderIndex = 0, hidden = 0) {
        this.id = id;
        this.label = label;
        this.type = type;
        this.className = undefined;
        this.orderIndex = orderIndex;
        // hidden 0 - is not hidden,
        // 1- hidden in small confirmation screen, visible in expanded screen
        // 2- visible in small conf screen , hidden in expanded screen
        this.hidden = hidden;
        this.values = [];
    }

    addValue(value) {
        this.values.push(value);
    }

    setHidden(hidden) {
        this.hidden = hidden;
    }

    setClassName(className) {
        this.className = className;
    }
}


export class IBAN { /*IBAN Model*/
  //incapsulate all logic in the model

  static getDefaultProps() {
    return { 
        ibanMinLength: 6, 
        ibanMaxLength: 24, 
        ibanValue: "", 
        ibanRequiredErrorMessage: "" /*:string_content_editor*/, 
        ibanInvalidErrorMessage: "" /*:string_content_editor*/,
        _ibanError: "" /*:string_content_editor*/ 
    };
  }

  constructor(props) {
    this._backupProps = {}; /*:Object<props>*/

    /*assign*/
    Object.assign(this, IBAN.getDefaultProps(), props);
    /*Collect the 'props' for later onReset payload*/
    Object.assign(this._backupProps , props);
  }

  set ibanError(errMessage) {
    this._ibanError = errMessage;
  }

  get ibanError() { return this._ibanError; }


  validate() {
    /**/
  }

  hasMinLength()  { //check for a minimum length of iban
    if(this.ibanValue.length >= this.ibanMinLength) {
      return true;
    }

    //set ibanError
    // this.ibanError = this.ibanRequiredErrorMessage;
    // return false;
  }

  reset() {
    Object.assign(this, IBAN.getDefaultProps(), this._backupProps);
    /*emit reset event*/
  }
}

export class DatePickerModel {
  /* restrictions & validation conditions */
  static getDefaultProps() {
    return {
      formatYear: 'yy',
      maxDate: new Date(2027, 5, 22),
      minDate: new Date(),
      startingDay: 1,
      showWeeks: true,

      dateValue: new Date()//all inputs should use [x]Value name conventions
    };
  }  

  constructor(props) {
    this._backupProps = {};

    Object.assign(this, DatePickerModel.getDefaultProps(), props);
    Object.assign(this._backupProps, props);
  }

  reset() {
    Object.assign(this, DatePickerModel.getDefaultProps(), this._backupProps) 
  }
}

export class AccountModel {

}

export class AmountCurrency {

}

export class SpecificModel {}


export class BasicForm {


    constructor() {
        this.summaryModel/*Array<ConfirmationElement>*/ = [];
    }

    onSubmit() {

    }

    onReset() {

    }

    onSwitchForms() {

    }

    syncStepTwo({ id, label, type, order, hidden, values, className }) {
        let _confirmationEl = new ConfirmationElement(id, label, type, order);

        if(hidden) {
            _confirmationEl.setHidden(true);
        }

        if (className) {
            _confirmationEl.setClassName(className);
        }

        values.forEach( val => _confirmationEl.addValue(val));

        this.upsertById(_confirmationEl);
    }

    goStep2() {

    }

    goStep3() {

    }

    goBack() {

    }

    upsertById(el/*:ConfirmationElement*/) {
        let i = _.findIndex(this.summaryModel, (sd) => {
            return sd.id === el.id;
        });

        if (i !== -1) {
            this.summaryModel.splice(i, 1, el);
        } else {
            this.summaryModel.push(el);
        }
    }

    removeByIds(ids/*:Array<string>*/) {
        _.remove(this.summaryModel, (sd) => {
            return _.findIndex(ids, (id) => {
                return sd.id === id;
            }) !== -1;
        });
    }
}


export class WestenReceive extends BasicForm {
    constructor($scope, $filter) {
        super();
        this.$scope = $scope;
        this.$filter = $filter;
    }

    $onInit() {
        this.$scope.$on('RESET_FORM', () => {
            this.onReset(/*special conditions*/);
        })

        this.selectedAccount/*:AccountModel*/ = new AccountModel(/*generates default empty account model*/);
        this.amount_currency = new AmountCurrency(/*generates default empty currency model*/) 

    }

    onReset(wu) {
        //do special stuff based on special wuReceive conditions
        if (wu.someSpecialCondition) {
            super.onReset();
            this.selectedAccount.reset();
            this.amount_currency.reset();

            this.removeByIds(['account', 'amount']);
        }
    }

    onChangeAmount(amountVal/*:string*/) {
        if(this.validateAmount(amountVal)) {
            if (this.amount_currency.currencySelected) {

                this.amount_currency.amount = amountVal; //write on local model

                this.syncStepTwo({
                    id: 'amount', className: 'is-bold',
                    label: 'general__labels__amount', type: 'basic', 
                    order: 2, hidden: 0, values: [
                        this.$filter('currency')(this.amount_currency.amount || amountVal, this.amount_currency.currency)
                ]})
            }
        }
    }

    onSelectCurrency(currency/*:string*/) {
        this.amount_currency.currency = currency;
    }

    validateAmount(amount/*:string*/) {
        //apply specific western receive money validation for amount
        // return values or set values as class members
    }
}


export class WesternSend extends WestenReceive {
    constructor($scope, $filter, $window) {
        super($scope, $filter);
        this.$window = $window;
    }

    validateAmount(amount) { // same method name -> use same template implementation | same super class flow
        //override: specific western send money validation form amount
    }

    $onInit() {
        super.$onInit();
        this.specificItem = new SpecificModel();
    }

    onReset(wu) { // this.onReset({someSpecialCondition: 'different implementation on send vs receive'})
        super.onReset(wu);
        this.specificItem.reset();
        
        this.removeByIds(['specificItemName']);
    }
}