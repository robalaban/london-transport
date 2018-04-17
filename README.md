# London Transport APP

London Transport App.
Check outage reports and search Bike Points.

* React
* Redux
* ReduxSaga
* Axios

For a simple UI, I just went ahead and used SemanticUI as a helper.

### Todo

There are some things I would focus on if this ever hit a production enviorment.

* Initial data manipulation, I curently do not order the data from the API
  * A good choice would have been a helper and hook it to the Redux Saga Generator
* Better component hierarchy
* Focus a little bit on the UX of the application and the design
* Handle API errors, currently I rely on the response object
