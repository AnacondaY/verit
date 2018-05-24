export default function inject(lang: object){
  return function (target: Function){
    target.prototype.lang = lang;
  }
}