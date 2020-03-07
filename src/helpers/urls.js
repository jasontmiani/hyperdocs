import { urls } from '../constants'

class Urls {
  url = command => {
    return urls[command] || this._fallback(command) || this._errorMessage(command)
  };

  _fallback = command => {
    // return `https://duckduckgo.com/?q=${command}+documentation&t=h_&ia=web` original url to ddgo. new one returns google w/ same query params {command} + documentation
    return `https://www.google.com/search?hl=en&as_q=${command}&as_epq=documentation&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&safe=images&as_filetype=&as_rights=`
  };

  _errorMessage = command => {
    return `Sorry Kalzad, ${command} failed to load.` && console.log(`Sorry Kalzad, ${command} failed to load.`)
  }
}

/* `https://google.com/search?hl=en&q=${command}&q=documentation`
  this generates a simple search for command + documentation. I used the version google spitot above. its an advanced search. */

export default new Urls()
