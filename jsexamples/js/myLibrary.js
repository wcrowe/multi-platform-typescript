(function(window){
  // You can enable the strict mode commenting the following line
  'use strict';

  // This function will contain all our code
  function myLibrary(){
    let _myLibraryObject = {};

    // This variable will be inaccessible to the user, only can be visible in the scope of your library.
    let settings = {
      volume: 100,
      mute: false
    };

    // Then your variable will be exposed with this method !
    _myLibraryObject.getSettings = function(){
      return settings;
    };



    // Change a private property
    _myLibraryObject.setVolume = function(volume){
      settings.volume = volume;
      return volume;
    };

    // Change a private property
    _myLibraryObject.setMute = function(muteStatus){
      if(typeof(muteStatus) === 'boolean'){
        settings.mute = muteStatus;
      }else{
        console.error("You need to disable or enable the sound !");
      }

      return settings.mute;
    };

    // Change a private property
    _myLibraryObject.haveSound = function(){
      return settings.mute;
    };

    return _myLibraryObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.myGloblalLib) === 'undefined'){
    window.myGloblalLib = myLibrary();
  }
})(window); // We send the window variable withing our function


// Now see the content of your library
console.log(myGloblalLib);

// It should ouput only 3 properties (setMute, setVolume, haveSound)
// And the settings variable can be only be accessed in your library, not outside
