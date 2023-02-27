//1. Observables in rxjs
//it is alternative of promise(promise is handle the asynchronous oprations(api calling and other) of java scrpit)
//Observables// >> emit the multiple value at a same time vs //promise//>> emit one value at a one time 
//observables//subscription are cancellable // promsie// not canellable
//observables//has oprators to reduce //promise// does not have any oprators.
//observables//lazy execution // promise// not lazy execution.

// ------------------------------------------------------------------------------------//
// Name some rxJs Operators?
// Map :- Transforms data in a observable in to a different format.
// Filter :- Allows data which meets conditions.
// Merge :- This operator will combine multiple Observables into one. So if one of the observables emit a value the combined one will emit as well.
// Concat :- only when observable completes, it will start with the next observable.
// From :- This operator will turn array, promise or iterable into an observable.
// debouncetime :- discard emitted values if a certain time didn't pass between the last input
// distinctuntilchanged :- only emits a value if it is different than the last one.
// pluck :- select a property to emit.
// delay :- emits a value with a delay.

