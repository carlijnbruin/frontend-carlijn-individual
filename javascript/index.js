class Single{                                                 // class, waarin constructor zit, kan bv ook teacher zijn, of een auto bv.
  constructor(firstname, age, gender, smoking){               // constructor, kan bv de aantal deuren of kleur zijn, hoeveel personen erin kunnen, etc.
    this.firstName = firstname;                               // this method verwijst naar het object die je aanmaakt bij de constructor
    this.age = age;                                           // context this method
    this.gender = gender;
    this.smoking = smoking;
  }

  olderThan30(){                                              // functie in een class die extra info over het object geeft, zoals age.
    if (this.age > 30){                                       // deze if/else statement wordt gebruikt in de functie showpicture().
      return true;                                            // deze functie zit in de class, hier refereer je in regel 65 en 66 naar.
    }
      return false;
  }

  isMan(){
    if (this.gender == 'man'){
      return true;
    }
      return false;
  }

  isSmoking(){
    if (this.smoking == 'wel'){
      return true;
    }
      return false;
  }
}


function showPicture(olderThan30, isMan, isSmoking){
  const img = document.querySelector("img");                    // waar de image in komt te staan
  if (olderThan30 && isMan && isSmoking == false){              // if else statement welke image te zien moet komen voor de juiste single
    img.src = 'images/old-woman.jpg';
    //laat deze foto zien van oude vrouw
  } else if (olderThan30 == false && isMan && isSmoking == false){
    img.src = 'images/young-woman.jpg';
    //laat foto zien van jonge vrouw
  } else if (olderThan30 && isMan == false && isSmoking == false){
    img.src = 'images/old-man.jpg';
    //laat foto zien van van oude man
  } else if (olderThan30 == false && isMan && isSmoking){
    img.src = 'images/young-woman-smoking.jpg';
  } else if (olderThan30 && isMan == false && isSmoking){
    img.src = 'images/old-man-smoking.jpg';
  } else if (olderThan30 && isMan && isSmoking){
    img.src = 'images/old-woman-smoking.jpg';
  } else if (olderThan30 == false && isMan == false && isSmoking){
    img.src = 'images/young-man-smoking.jpg';
  } else {
    img.src = 'images/young-man.jpg';
    //laat foto zien van jonge man
  }
}


const btn = document.querySelector('button');                   // global scope, overal te gebruiken in de code

btn.addEventListener('click', function(){
  const smoking = document.getElementById('smoking').value      // local scope
  const firstName = document.getElementById('firstname').value; // waarde die in firstname wordt gegeven
  const age = document.getElementById('age').value;             // waarde die in age wordt gegeven
  const gender = document.getElementById('gender').value;       // waarde die in gender wordt gegeven
  single1 = new Single(firstName, age, gender, smoking);        // nieuwe object aanmaken, van het type (class) Single (kan dus bv ook auto zijn), refereert naar de constructor. / closure
  showPicture(single1.olderThan30(), single1.isMan(), single1.isSmoking()); // higher order function - in functie andere functie aanroepen.
  console.log(single1.firstName);
})
