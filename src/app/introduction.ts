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

//oprator in rxjs
// Creation
// Mathematical
// Join or Combination
// Transformation
// Filtering
// Utility
// Conditional
// Multicasting
// Error handling
// Boolean
// Aggregate

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


//intrval -//emit value in sequence every 1 second  
//timer - ye do arrgument leta hai first kab suru ho or kitne sec me chle
  //tap(observerOrNext, error complete )=> Optional
  //fromEvent(target, event);
  //of(args)
  //from(arrgs  )
  //pluck(properties)
  //take(count)
  //


//   Operator tap का उपयोग RxJS में किया जाता है जो एक Observable को मॉडिफाई करने के लिए उपयोग किया जाता है। tap ऑपरेटर देखने के लिए एक RxJS Observable को देखता है लेकिन कुछ नहीं बदलता है, और फिर उसे वापस देता है। tap ऑपरेटर से हम एक Observable को subscribe करने से पहले या subscribe करने के बाद मॉडिफाई कर सकते हैं जैसे कि console.log() कॉल करके वेरिएबल की मूल्य देखना।
// यह एक डेबगिंग टूल के रूप में उपयोग किया जाता है जो Observable में हो रही घटनाओं की जांच करने के लिए इस्तेमाल किया जाता है। इसका उपयोग किसी भी उपयोगकर्ता अभिनय को परखने के लिए किया जाता है जैसे कि किसी बटन को क्लिक करने पर क्या हो रहा है, कौन सा वैल्यू सेट हुआ है या कौन सी घटनाएं हो रही हैं।




// debounceTime एक RxJS ऑपरेटर है जो टाइमर को रीसेट किए बिना एक Observable से आउटपुट को देर करता है। यह Observable में बड़ी ताकतवर घटनाओं को कम करता है जो काफी तेजी से दौड़ रही होती हैं।
// जब हम debounceTime को Observable पर लागू करते हैं, तो उसके बाद दी गई मिलीसेकंड में कोई दूसरी घटना आई तो वह इग्नोर हो जाती है और जब यह समय समाप्त होता है, तो लेटेस्ट घटना को आउटपुट के रूप में भेज दिया जाता है।
// इसका उपयोग उन घटनाओं को दिखाने के लिए किया जाता है जो तेजी से आ रही होती हैं लेकिन उनका इंपैक्ट कम होता है। उदाहरण के लिए, जब हम एक खोज क्वेरी डालते हैं, तो debounceTime उसे एक बार में केवल एक बार भेजता है, जो कि खोज करने से पहले ठीक होने के लिए कुछ समय लेता है।




// Observable और observe दोनों अलग-अलग चीजें होती हैं।
// Observable एक RxJS क्लास है जो डेटा सीधे और एसिंक्रोनस ढंग से इमिट करता है। Observable एक पाइपलाइन होती है जो डेटा को अन्य RxJS ऑपरेटरों (जैसे map, filter, debounce, etc.) के साथ ट्रांसफॉर्म करती है जो फ़ायदेमंद और सुविधाजनक बनाने में मदद करते हैं।
// वह एक क्लास होती है जो हमें अपने कस्टम ऑपरेटर भी बनाने की सुविधा देती है।
// observe दूसरी तरफ, Observable को subscribe करने के लिए एक मेथड होता है। जब हम किसी Observable को subscribe() करते हैं, तो हम एक Observer ऑब्जेक्ट का उपयोग करते हैं जो डेटा इमिट करते हुए उस Observable से लिया जा सकता है।
// यदि हम एक Observable को subscribe() करते हैं, तो हम उस Observable की मॉडिफाइड वर्जन जो कि एक Subscription होता है को प्राप्त करते हैं। Subscription को अनुशंसित रूप से unsubscribe() करना चाहिए जब हम इसे नहीं इस्तेमाल कर रहे होते हैं ताकि अतिरिक्त रिसोर्सेस का विनाश हो सके।
// इसलिए, Observable और observe दोनों अलग-अलग होती हैं और एक-दूसरे से भिन्न होती हैं। 




//iif ऑपरेटर रिएक्टिव एक्सजेएस में एक शर्ताधारी ऑपरेटर है जो दो विकल्पों में से एक चुनता है। यह दो विकल्पों की एक एरे बनाता है जो उस स्थिति के अनुसार उत्पन्न होता है जिसमें iif ऑपरेटर का उपयोग किया जाता है। इस ऑपरेटर को इस्तेमाल करने के लिए आपको पहले दो विकल्पों को पास करने होंगे। उसके बाद, आपको एक शर्त देनी होगी जो सत्य होने पर पहले विकल्प को वापस देगी और अगर नहीं तो दूसरे विकल्प को वापस देगी।
// यह ऑपरेटर निम्नलिखित संदर्भों में उपयोगी हो सकता है:
// जब आप दो विकल्पों में से एक चुनना चाहते हों।
// जब आप शर्ताधारी प्रोसेसिंग करना चाहते हों।









