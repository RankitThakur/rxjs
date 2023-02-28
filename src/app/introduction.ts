// Reactive Extensions for Javascript

//1. Observables in rxjs
//it is data source
//time to time data ko emit karna.
//use use kanre ke liye subscribe karna padta hai.
//
//it is alternative of promise(promise is handle the asynchronous oprations(api calling and other) of java scrpit)
//Observables// >> emit the multiple value at a same time vs //promise//>> emit one value at a one time 
//observables//subscription are cancellable // promsie// not canellable
//observables//has oprators to reduce //promise// does not have any oprators.
//observables//lazy execution // promise// not lazy execution.



// ------------------------------------------------------------------------------------//

// Name some rxJs Operators?
//fromevent- Turn event into observable sequence.
//toArray - emit data ko ye conevet kar deta hai array me jab observale complete ho jata hai tab ye array me convevt kar deta hai 
//of ->>>Converts the arguments to an observable sequence.///jese humare pass then function obje and string hai to usko wo squcavantion wish emit karneha
// From :- This operator will turn array, promise or iterable into an observable.
// Map :- Transforms data in a observable in to a different format.
// Filter :- Allows data which meets conditions.
// Merge :- This operator will combine multiple Observables into one. So if one of the observables emit a value the combined one will emit as well.
// Concat :- only when observable completes, it will start with the next observable.
// debouncetime :- discard emitted values if a certain time didn't pass between the last input
// distinctuntilchanged :- only emits a value if it is different than the last one.
// pluck :- select a property to emit. short hand tarika hai map ka.

// delay :- emits a value with a delay.

// Filter: Removes emitted data from the stream.
// Map: Transforms it.


//swithmap and map oprater- it is an Flattening Operato/ do bar subscrbe karne se bachna means obseraval ke respones me bhi humko obseraval milta hai to isme humko subscrbe nhi karna padta hai
//ye old sabhi emision ki request ko cancle karta hai and new value ke shat work karta hai.
//search functionly me iska use hota hai.
//
  //replay-subject - multiple old store value/ "Replays" or emits old values to new subscribers //it store value as per requarment
