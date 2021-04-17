(function() {
  // var obj = {
  //   prop1: {
  //     prop2: {
  //       prop3: {
  //         prop31: 'prop31',
  //         prop32: 'prop32',
  //         prop33: 'prop33'
  //       }
  //     }
  //   }
  // };
  // console.log(obj.prop1.prop2.prop3);
  // // o método with é util para quando é necessário acessar objetos que possuem muitos valores,
  // // não é possível utiliza-lo no modo strict
  // with (obj.prop1.prop2.prop3) {
  //   console.log(prop31, prop32, prop33)
  // }

  console.log(this)


  var obj = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  }

  console.log(delete obj.prop1);
})();


