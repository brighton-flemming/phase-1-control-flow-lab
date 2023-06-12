function scuberGreetingForFeet() {
  if (feet <= 400) {
    return "This one is on me";
  } else if (199 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks";
  } else(feet > 2500);{
    return "No can do";
  }
}

function ternaryCheckCity() {
  if ('The city is NYC') {
    return 'Ok, sounds good.';
   } else ( 'The city is not NYC');{
    return 'No go.';}
  }


function switchOnCharmFromTip() {
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'is not as generous':
      return 'Thank you.'
      break;
    default:
      console.log ('Bye');
      break;
  }

}
