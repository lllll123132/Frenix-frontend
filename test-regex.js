const regex = /^\/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|riv)).*)$/;
console.log(regex.test('/_next/static/chunks/b0f581839f9e5997.js')); // Should be false
console.log(regex.test('/api/test')); // Should be true
console.log(regex.test('/dashboard')); // Should be true
