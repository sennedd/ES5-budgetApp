
//Budget controller
var budgetController = (function() {

    //Some code

})();

/*Separation of concerns - each part 
of the application should only be 
interested in doing one thing independently */

//UI Controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be other income or expense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

//Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var setUpEventListeners = function() {
        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
    
            if (event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            }    
        });
    };



    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getInput();
        

        // 2. Add the item to the budget controller

        // 3. Add a new item to the UI

        // 4. calculate the budget

        // 5. display the budget on the UI

        
    };

    return {
        init: function() {
            console.log('The app is running.');
            setUpEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();

