
function init (name) {
  require(`./views/${name}/${name}.css`);
  return require(`./views/${name}/${name}.hml`);
}
export default init;
