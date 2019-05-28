## Datables in React

This is an example of how to implement datatables from datatables.net (from Spry Media) in React. It is not ported from jquery, however it works great in react apps in all my testing.

I realise that using jquery in react is a no no, but if you make sure react is unaware of the dom changes happening with datatables it should work fine. This is done by using react's own recommnded approach of `<table ref={(el) => (this.el = el)} />` which renders an 'empty' table as far as react knows. Therefore it will not try to rerender it ever, giving the jquery within datatables free reign to manipulate the dom.

I may try to make this into an npm component in the future but for now it is just an example you can clone to see how it's done.

If someone is willing to port it from jquery that would be great! Please fork away.
