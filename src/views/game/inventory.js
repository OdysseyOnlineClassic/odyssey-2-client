const m = require('mithril');

const Slot = {
  view: () => {
    return m('img', { width: '32px', height: '32px' })
  }
}

const Inventory = {
  view: () => {
    return m('div', { width: `${32 * 5}px`, height: `${32 * 5}px` })
  }
}
