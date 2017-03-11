
console.log("Underscore.js");

//1. Extract action types
console.log("1. Extract action types");
(
  function(){
    var types = _.pluck(testJson.actions, 'type');
    console.log(types);
  }
  )();

// 2. Convert actions array into an object where the key is the actions' type and the value are its params.
console.log("2. Convert actions array into an object where the key is the actions' type and the value are its params:");
(
  function(){
    var convertedActions = _.map(testJson.actions, 
    function(acction){ 
      var convertedAction = {};
      convertedAction[acction.type] = acction.params;
      return convertedAction;
    });
    console.log(convertedActions);
  }
  )();

// 3. Calculate the sum and average for the following input (non-number elements should be ignored):
console.log("3. Calculate the sum and average for the following input (non-number elements should be ignored):");
(
  function(){

      function iterateArray(elementArray){
        var sum = 0;
        var count = 0;
        _.each(elementArray, 
          function calculate(element){
            if(typeof(element)==="number"){
              sum += parseInt(element);
              count+=1;
            }
          }
      );
      var average = sum/count;
      console.log("sum : "+sum);
      console.log("average : "+average);
    }

    iterateArray(["0", 2, 4, 6, null, [], 8, 10]);

  })();

